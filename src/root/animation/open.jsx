import "./animation.scss"
import DesktopView from "../index/DesktopView";
    

const animatedPage = () => {
    return (
        <>
            <div class="splash">
                <div class="splash_logo">
                    <img
                        src="/anga.svg"
                    />
                </div>
                <div class="splash_svg">
                    <svg width="100%" height="100%">
                        <rect width="100%" height="100%" />
                    </svg>
                </div>
                <div class="splash_minimize">
                    <svg width="100%" height="100%">
                        <rect width="100%" height="100%" />
                    </svg>
                </div>
            </div>
            <div class="text">
                <DesktopView />
            </div>
        </>
    );
}

export default animatedPage;