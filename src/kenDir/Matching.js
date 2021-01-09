import React, {useState, useEffect} from 'react';

const Matching = () => {
    const [cards, setCards] = useState(buildCards())
    const [checkers, setCheckers] = useState([])
    const [completed, setCompleted] = useState([])

    useEffect(()=>{
        const newCards = cards.map(card => ({
          ...card,
          flipped: checkers.find(c => c.id === card.id) ||
                   completed.includes(card.type)
        }))
        setCards(newCards)
      }, [checkers, completed])

    function shuffle(arr) {
        for(let i = 0; i < arr.length; i++){
          let randomIdx = Math.floor(Math.random() * arr.length)
          let copyCurrent = {...arr[i]}
          let copyRandom = {...arr[randomIdx]}
          arr[i] = copyRandom
          arr[randomIdx] = copyCurrent
        }
        return arr
      }

    function buildCards(){
        let id = 0
        const images = {
          img1: 'https://media3.giphy.com/media/eUOoAz2OmSvxm/200.webp?cid=ecf05e4793vi2gdlv06yioyefp4yie3x7wyoboo0k379nsbt&rid=200.webp',
          img2: 'https://media4.giphy.com/media/3mVO7FpUhdBsY/giphy.webp?cid=ecf05e47w5vea5r6hayadxzd2xaq5res6ccaguzz6jj94cys&rid=giphy.webp',
          img3: 'https://media4.giphy.com/media/G75vaTH9hz1VCXkuTp/200.webp?cid=ecf05e47w5vea5r6hayadxzd2xaq5res6ccaguzz6jj94cys&rid=200.webp',
          img4: 'https://media1.giphy.com/media/jmr8pPJiBDj1J9s4qz/200w.webp?cid=ecf05e47w5vea5r6hayadxzd2xaq5res6ccaguzz6jj94cys&rid=200w.webp',
          img5: 'https://media4.giphy.com/media/4W1Kdek3giNyQHgYuK/200.webp?cid=ecf05e47p357ghoplnfosb0y3wq0a4ttujv0lqemfa873s7k&rid=200.webp',
          img6: 'https://media1.giphy.com/media/C9LijPMTpJC5XV1dzd/giphy.webp?cid=ecf05e47412diqxtwam9hjklwozlk1d6xz5ridr3ggxl0wsp&rid=giphy.webp',
          img7: 'https://media0.giphy.com/media/huJ9jSvUyrhVOJfYkg/200w.webp?cid=ecf05e479rrh6iv07l6gcykqg2w9cqytelxsz9pdkkdk5l0q&rid=200w.webp',
          img8: 'https://media4.giphy.com/media/LDn4YzQXfjmhkqMKMO/200w.webp?cid=ecf05e473zhxt63el4foozkmrgvklexrbnh7dc7al3omurxr&rid=200w.webp',
        }
        const cards = Object.keys(images).reduce((result,key) => {
          const createCard = () => ({
            id: id++,
            type: key,
            backImg: 'https://i.pinimg.com/originals/cc/e9/df/cce9df1e63bc5ecc89bb6fa6db6dbf04.jpg',
            frontImg: images[key],
            flipped: true
          })
          result.push(createCard())
          result.push(createCard())
          return result
        }, [])
        return shuffle(cards)
      }

    const onCardClick = card => {
        function validateCheckers(checkers) {
            return checkers.length === 2 && checkers[0].type === checkers[1].type
        }

        function cardAlreadyInCheckers(checkers, card) {
            return checkers.length === 1 && checkers[0].id === card.id
        }
        
        function checkersFull(checkers){
            return checkers.length === 2;
        }
        function resetCheckersAfter(time){
            setTimeout(() => {
                setCheckers([]);
            }, time)
        }
        if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return 
        const newCheckers = [...checkers, card];
        setCheckers(newCheckers)
        const cardsInCheckerMatched = validateCheckers(newCheckers);
        if (cardsInCheckerMatched) {
            setCompleted([...completed, newCheckers[0].type])
        }
        if (checkersFull(newCheckers)) {
            resetCheckersAfter(1000)
        }
    }

    const renderCard = card => {
        const {frontImg, backImg, flipped} = card;
        const img = flipped? frontImg : backImg
        return (
            <div onClick={() => onCardClick(card)} key={card.id} className="matching-card">
                <img src={img} alt="card"/>
            </div>
        )
    }

    return (
        <div className="matching-game">
            <div className="board">
                {cards.map(renderCard)}
            </div>
        </div>
    )
}

export default Matching;
