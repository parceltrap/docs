import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'en-GB',
    title: 'ParcelTrap',
    description: 'A driver-based parcel tracking library for PHP.',
    theme: defaultTheme({
        repo: 'parceltrap/parceltrap',
        docsRepo: 'parceltrap/docs',
        lastUpdated: false,
        contributors: false,
        navbar: [
            {
                text: 'Installation',
                link: '/'
            },
            {
                text: 'Drivers',
                link: '/drivers'
            },
            {
                text: 'Guides',
                children: [
                    {
                        text: 'Creating a Driver',
                        link: '/guides/creating-drivers'
                    },
                    {
                        text: 'Handling Exceptions',
                        link: '/guides/handling-exceptions'
                    }
                ]
            }
        ],
    }),
    plugins: [],
})
