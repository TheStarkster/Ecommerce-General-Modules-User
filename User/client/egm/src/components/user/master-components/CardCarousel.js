import React from 'react'
import ItemsCarousel from 'react-items-carousel';

export default (props) => {
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={props.NumberOfCard}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
                <div style={{ height: 200, background: '#EEE' }}>Recommended Product</div>
            </ItemsCarousel>
        </div>
    );
};