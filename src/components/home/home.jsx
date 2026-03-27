import './home.scss'

import Ingredients from '../ingredients/ingredients';


export default function Home() {
    return (
        <section className='home'>
            <div className='home-top-container'>
                {/* Content */}
                <div className='home-top-left'>
                    <h1>What's in your <i>kitchen</i> today?</h1>
                    <p>Enter the ingredients you have on hand, and
                        our culinary engine will curate the perfect
                        gourmet experience for your table.
                    </p>
                    <Ingredients/>
                </div>
                {/* Decorative Image */}
                <div className='home-top-right'></div>
            </div>
        </section>
    )
} 