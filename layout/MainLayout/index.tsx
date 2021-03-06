import Header from '../shared/Header'
import Footer from '../shared/Footer'

function MainLayout(props: any) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout