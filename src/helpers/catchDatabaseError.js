import * as Sentry from '@sentry/react-native'
import SnackBar from '~common/SnackBar'
import i18n from '~i18n'

const catchDBError = async fn => {
  try {
    return await fn()
  } catch (e) {
    console.log('Error =>', e)

    if (!e) {
      SnackBar.show(i18n.t('Une error est survenue.'), 'danger', {
        duration: 5000,
      })
      return { error: 'UNKNOWN_ERROR' }
    }

    const corruptedDBError = e.toString().includes('no such table')
    const diskError = e.toString().includes('Error code 10: disk I/O error')

    if (corruptedDBError) {
      SnackBar.show(
        i18n.t(
          'Une error est survenue, la base de données est peut-être corrompue. Rendez-vous dans la gestion de téléchargements pour retélécharger la base de données.'
        ),
        'danger',
        { duration: 5000 }
      )

      Sentry.withScope(scope => {
        scope.setExtra('Error', e.toString())
        Sentry.captureMessage('Database corrupted')
      })

      return { error: 'CORRUPTED_DATABASE' }
    }

    if (diskError) {
      SnackBar.show(i18n.t('Redémarrez votre application'), 'danger', {
        duration: 5000,
      })

      return { error: 'DISK_IO' }
    }

    SnackBar.show(
      i18n.t('Une error est survenue, le développeur en a été informé.'),
      'danger',
      {
        duration: 5000,
      }
    )

    console.log(e)
    Sentry.captureException(e)

    return { error: 'UNKNOWN_ERROR' }
  }
}

export default catchDBError
