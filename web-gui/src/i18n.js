import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            home: 'Home', favorites: 'Favorites', media: 'My Media',
            movies: 'Movies', shows: 'TV Shows', music: 'Music',
            liveTV: 'Live TV', marketplace: 'Marketplace',
            settings: 'Settings', dashboard: 'Dashboard',
        }
    },
    ar: {
        translation: {
            home: 'الرئيسية', favorites: 'المفضلة', media: 'وسائطي',
            movies: 'أفلام', shows: 'مسلسلات', music: 'موسيقى',
            liveTV: 'بث مباشر', marketplace: 'متجر التطبيقات',
            settings: 'الإعدادات', dashboard: 'لوحة التحكم',
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: { escapeValue: false }
})

export default i18n
