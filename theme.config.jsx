export default {
    logo: <span>Hollow</span>,
    docsRepositoryBase: "https://github.com/wraithdotcat/hollow-docs",
    footer: {
        text: (
            <span>
                © {new Date().getFullYear()}
                <a href="/">, Hollow</a>.
            </span>
        ),
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s – Hollow",
        };
    },
    sidebar: {
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <div>{title}</div>;
            }
            return <>{title}</>;
        },
    },
    navigation: {
        prev: false,
        next: false,
    },
    editLink: {
        text: null,
    },
    feedback: {
        content: null,
    },
};
