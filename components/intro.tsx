import Navigation from './navigation'

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center justify-between max-w-5xl mx-auto mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Blog.
            </h1>
            <Navigation />
        </section>
    )
}

export default Intro
