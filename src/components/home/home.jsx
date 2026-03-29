import './home.scss'
import { useState, useEffect } from 'react';

import Ingredients from '../ingredients/ingredients';


export default function Home() {
    const foodQuotes = [
        { quote: "A recipe has no soul. You, as the cook, must bring soul.", author: "Thomas Keller" },
        { quote: "Anyone who is a chef must learn to cook with instinct.", author: "Gordon Ramsay" },
        { quote: "Food is symbolic of love when words are inadequate.", author: "Alan D. Wolfelt" },
        { quote: "Good food is very often, even most often, simple food.", author: "Anthony Bourdain" },
        { quote: "Food is not just eating energy. It’s an experience.", author: "Guy Fieri" },
        { quote: "People who love to eat are always the best people.", author: "Julia Child" },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 43200000); // change every 12 hours

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <section className='home'>
            <div className='home-top-container'>
                {/* Content */}
                <div className='home-top-left'>
                    <h1>What's in your <i>kitchen</i> today?</h1>
                    <p className='home-top-left-p'>Enter the ingredients you have on hand, and
                        our culinary engine will curate the perfect
                        gourmet experience for your table.
                    </p>
                    <Ingredients/>
                </div>
                {/* Decorative Image */}
                <div className='home-top-right'>
                    <div className='food-quote-card'>
                        <div className='food-quote-card-content'>
                        <p className='food-quote-title'><i>Today's Inspiration</i></p>
                        <p className='food-quote-quote'>"{foodQuotes[index].quote}"</p>
                        <p className='food-quote-author'><b>- {foodQuotes[index].author}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 