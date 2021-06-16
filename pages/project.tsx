import Layout from '@components/layout'
import { NextSeo } from 'next-seo'

import React, { Fragment } from 'react'

export default function project() {
    return (
        <Fragment>
            <NextSeo
                title="Project"
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

            <Layout title="Project">
                <section className="text-gray-600 dark:text-gray-400">
                    <div className="py-12 flex flex-wrap">
                        <div className="flex w-full mb-20 flex-wrap">
                            <h1 className="sm:text-3xl text-2xl font-bold lg:w-1/3 lg:mb-0 mb-4">
                                Master Cleanse Reliac Heirloom
                            </h1>
                            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed">
                                Whatever cardigan tote bag tumblr hexagon brooklyn
                                asymmetrical gentrify, subway tile poke farm-to-table.
                                Franzen you probably haven't heard of them man bun deep
                                jianbing selfies heirloom.
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src="https://dummyimage.com/600x360"
                                    />
                                    <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-gray-50 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            THE SUBTITLE
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Shooting Stars
                                        </h1>
                                        <p className="leading-relaxed">
                                            Photo booth fam kinfolk cold-pressed sriracha
                                            leggings jianbing microdosing tousled
                                            waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src="https://dummyimage.com/600x360"
                                    />
                                    <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-gray-50 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            THE SUBTITLE
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Shooting Stars
                                        </h1>
                                        <p className="leading-relaxed">
                                            Photo booth fam kinfolk cold-pressed sriracha
                                            leggings jianbing microdosing tousled
                                            waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src="https://dummyimage.com/600x360"
                                    />
                                    <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-gray-50 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            THE SUBTITLE
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Shooting Stars
                                        </h1>
                                        <p className="leading-relaxed">
                                            Photo booth fam kinfolk cold-pressed sriracha
                                            leggings jianbing microdosing tousled
                                            waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src="https://dummyimage.com/600x360"
                                    />
                                    <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-gray-50 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            THE SUBTITLE
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Shooting Stars
                                        </h1>
                                        <p className="leading-relaxed">
                                            Photo booth fam kinfolk cold-pressed sriracha
                                            leggings jianbing microdosing tousled
                                            waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </Fragment>
    )
}
