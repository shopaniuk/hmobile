import React from "react";
import styles from "./HomeCarousel.module.css";
import { Image, Carousel, Button } from "react-bootstrap";
import Link from "next/link";
import AirPods from "../../../public/static/airPods.png";

const HomeCarousel = () => (
    <Carousel className={styles.carouselContainer}>
        <Carousel.Item interval={3000}>
            <div className={styles.carouselItem}>
                <Image className={styles.carouselImage} src={AirPods} />
                <div className={styles.carouselText}>
                    <h3>The</h3>
                    <h1>Lightest, Strongest, Most Versatile, & Cleanest</h1>
                    <h3>Hands-free solutions available at any price!</h3>
                    <p>
                        Patented one-piece dual-band design delivers unprecedented versatility. Enjoy unrestricted movement and air flow. HuggyMobile's "bridge" the belly of muscles and holds in-place with non-slip silicone grip dots.
                    </p>
                    <Link href="/infinity"><Button className={styles.buyButton}>Learn More</Button></Link>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className={styles.carouselItem}>
                <Image className={styles.carouselImage} src={AirPods} />
                <div className={styles.carouselText}>
                    <h3>Improve</h3>
                    <h1>Productivity, Security & Safety</h1>
                    <h3>Enhance safety, convenience & protection!</h3>
                    <p>
                        Turn any mobile device into a wearable. Machine washable, stain resistant, scrunchable, pocketable, packable. Perfect for those on the go or for easier handling at work and home. Mobile workforces, multi-tasking moms, coaches, first responders and more. Cushions blow if dropped, and protects screen from scratches when placed face down.
                    </p>
                    <Link href="/infinity"><Button className={styles.buyButton}>Learn More</Button></Link>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className={styles.carouselItem}>
                <Image className={styles.carouselImage} src={AirPods} />
                <div className={styles.carouselText}>
                    <h1>Wear it! Strap it! Hang it! Dangle it! Sling it! Clip it!</h1>
                    <h3>Uprecedented versatility to Fit Your Life!</h3>
                    <p>
                        Have it your way! Convenient secure access any time. Wearing, attaching, mounting and propping options increase productivity and safety.
                    </p>
                    <Link href="/infinity"><Button className={styles.buyButton}>Learn More</Button></Link>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className={styles.carouselItem}>
                <Image className={styles.carouselImage} src={AirPods} />
                <div className={styles.carouselText}>
                    <h3>Individual</h3>
                    <h1>Convenience, Comfort & Style</h1>
                    <h3>Customizable to fit your body and personality!</h3>
                    <p>
                        Choose from our designs or Create Your Own 100% customizable designs or photos, brand logos & messages. Universal fit hugs devices with and without cases. Less drops, hold easily without grasping, reducing hand-arm fatigue and potential of repetitive injuries.
                    </p>
                    <Link href="/infinity"><Button className={styles.buyButton}>Learn More</Button></Link>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>
);

export default HomeCarousel;
