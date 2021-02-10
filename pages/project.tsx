import Container from '@components/container'
import Header from '@components/header'
import Layout from '@components/layout'
import { NextSeo } from 'next-seo'

import React, { Fragment } from 'react'

export default function project() {
    return (
        <Fragment>
            <NextSeo
                title=""
                canonical="http://inurhuda00.github.io/"
                openGraph={{
                    title: 'Open Graph Profile Title',
                    description: 'Description of open graph profile',
                    url: 'https://www.example.com/@firstlast123',
                    type: 'profile',
                    profile: {
                        firstName: 'ilham',
                        lastName: 'nuruddin',
                        username: 'inurhuda',
                        gender: 'male',
                    },
                    images: [
                        {
                            url: 'https://www.test.ie/images/profile.jpg',
                            width: 850,
                            height: 650,
                            alt: 'Profile Photo',
                        },
                    ],
                }}
            />

            <Layout>
                <Container>
                    <Header title="Project" />
                </Container>
            </Layout>
        </Fragment>
    )
}
