import ImageWindow from "../components/ImageWindow";

export default function Home() {
    return (
        <>              
            <ImageWindow 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Chogori.jpg"
                alt="K2's brutal east face"
                title="Beauty"
                text="A fortitude of human strength"
                tags={["strength", "drive", "power"]}
            />
            <ImageWindow 
                src="https://www.switchbacktravel.com/sites/default/files/images/articles/Annapurna%20Sanctuary%20Trek%20Nepal.JPG"
                alt="Annapura's haunting visage"
                title="Life on the Edge"
                text="A homage to mortality"
                tags={["life", "death"]}
            />
        </>
    );
}