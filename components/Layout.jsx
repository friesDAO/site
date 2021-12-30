// Navigation bar component

const NavBar = () => (
    <></>
)

// Footer component

const Footer = () => (
    <></>
)

// Layout component

const Layout = ({ children }) => (
    <>
        <NavBar></NavBar>
        <div className="content">
            {children}
        </div>
        <Footer></Footer>
        <style jsx>{`
            .content {
                width: 100%;
                padding: 0 max(calc(50vw - 500px), 20px);
            }
        `}</style>
    </>
)

// Exports

export default Layout