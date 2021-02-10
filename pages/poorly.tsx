import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Fragment } from 'react'

export default function poorly() {
    return (
        <Fragment>
            <NextSeo
                title="poorly"
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

            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative font-spartan">
                <img
                    className="absolute top-0 hidden lg:block"
                    src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/bg-pattern-top-desktop.svg"
                    alt="background pattern"
                />

                <img
                    className="absolute top-0 lg:hidden"
                    src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/bg-pattern-top-mobile.svg"
                    alt="background pattern"
                />
                <img
                    className="absolute bottom-0 lg:hidden"
                    src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/bg-pattern-bottom-mobile.svg"
                    alt="background pattern"
                />
                <img
                    className="absolute bottom-0 hidden lg:block"
                    src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/bg-pattern-bottom-desktop.svg"
                    alt="background pattern"
                />
                <div className="flex flex-col py-20 mx-5 lg:w-3/4 lg:mx-auto">
                    <div className="lg:flex lg:justify-between">
                        <div className="lg:flex lg:flex-col lg:w-5/12 ">
                            <h1 className="text-4xl font-semibold text-center lg:mt-12 lg:text-5xl lg:text-left text-dark-grayish-magenta">
                                10,000+ of our users love our products.
                            </h1>
                            <p className="mt-8 text-center lg:leading-relaxed lg:mt-4 lg:text-sm text-dark-grayish-magenta lg:text-left">
                                We only provide great products combined with excellent
                                customer service. See what our satisfied customers are
                                saying about our services.
                            </p>
                        </div>
                        <div className="lg:ml-24">
                            <div className="flex flex-col items-center justify-center w-full h-20 mt-12 text-center rounded-lg lg:mr-24 lg:h-14 lg:w-112 background-text-light-grayish-magenta">
                                <div className="my-3 lg:flex lg:w-full">
                                    <div className="flex justify-center lg:mx-8 lg:my-3 ">
                                        <img
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                    </div>
                                    <p className="mt-3 font-bold lg:text-sm text-dark-grayish-magenta">
                                        Rated 5 Stars in Reviews
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-20 mt-4 text-center rounded-lg lg:ml-12 lg:mr-12 lg:w-112 lg:h-14 background-text-light-grayish-magenta">
                                <div className="my-3 lg:flex lg:w-full ">
                                    <div className="flex justify-center lg:mx-8 lg:my-3 ">
                                        <img
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                    </div>
                                    <p className="mt-3 font-bold lg:text-sm text-dark-grayish-magenta">
                                        Rated 5 Stars in Report Guru
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-20 mt-4 text-center rounded-lg lg:ml-24 lg:w-112 lg:h-14 background-text-light-grayish-magenta">
                                <div className="my-3 lg:flex lg:w-full">
                                    <div className="flex justify-center lg:mx-8 lg:my-3 ">
                                        <img
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                        <img
                                            className="ml-2"
                                            src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/icon-star.svg"
                                            alt="star icon"
                                        />
                                    </div>
                                    <p className="mt-3 font-bold lg:text-sm text-dark-grayish-magenta">
                                        Rated 5 Stars in BestTech
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex lg:mt-20">
                        <div className="flex flex-col w-full mt-12 overflow-y-auto lg:mb-6 min-h-64 lg:mt-0 bg-dark-grayish-magenta rounded-xl">
                            <div className="mt-10 mx-7 mb-9">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 rounded-full"
                                        src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/image-colton.jpg"
                                        alt="Colton's avatar"
                                    />
                                    <div className="flex flex-col ml-8">
                                        <span className="text-sm font-semibold text-light-grayish-magenta">
                                            {' '}
                                            Colton Smith{' '}
                                        </span>
                                        <span className="text-sm text-soft-pink">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mt-7 text-light-grayish-magenta">
                                    "We needed the same printed design as the one we had
                                    ordered a week prior. Not only did they find the
                                    original order, but we also received it in time.
                                    Excellent!"
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4 min-h-64 lg:my-3 lg:ml-7 bg-dark-grayish-magenta rounded-xl">
                            <div className="mt-10 mx-7 mb-9">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 rounded-full"
                                        src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/image-irene.jpg"
                                        alt="Colton's avatar"
                                    />
                                    <div className="flex flex-col ml-8">
                                        <span className="text-sm font-semibold text-light-grayish-magenta">
                                            {' '}
                                            Irene Roberts{' '}
                                        </span>
                                        <span className="text-sm text-soft-pink">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mt-7 text-light-grayish-magenta">
                                    "Customer service is always excellent and very quick
                                    turn around. Completely delighted with the simplicity
                                    of the purchase and the speed of delivery."
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4 min-h-64 lg:mt-6 lg:ml-7 bg-dark-grayish-magenta rounded-xl">
                            <div className="mt-10 mx-7 mb-9">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 rounded-full"
                                        src="https://design-portfolio.mecirmartin.vercel.app/images/social_proof_section/image-anne.jpg"
                                        alt="Colton's avatar"
                                    />
                                    <div className="flex flex-col ml-8">
                                        <span className="text-sm font-semibold text-light-grayish-magenta">
                                            {' '}
                                            Anne Wallace{' '}
                                        </span>
                                        <span className="text-sm text-soft-pink">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mt-7 text-light-grayish-magenta">
                                    "Put an order with this company and can only praise
                                    them for the very high standard. Will definitely use
                                    them again and recommend them to everyone!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
