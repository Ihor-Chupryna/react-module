import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            description: 'As the nominal foreman of the paternally eponymous family, Homer and his wife Marge have three children: Bart, Lisa and Maggie. As the family\'s provider, he works at the Springfield Nuclear Power Plant as safety inspector.',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            name: 'Bart',
            surname: 'Simpson',
            description: 'At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart\'s most prominent and popular character traits are his mischievousness, rebelliousness and disrespect for authority. ',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png'
        },
        {
            id: 3,
            name: 'Lisa',
            surname: 'Simpson',
            description: 'Intelligent, kind and passionate about the planet and all living things, Lisa Simpson, at eight years old, is the second child of Homer and Marge, the younger sister of Bart, and the older sister of Maggie. ',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
        },
        {
            id: 4,
            name: 'Marge',
            surname: 'Simpson',
            description: 'Marge is the matriarch of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            description: 'Maggie is the youngest child of Homer and Marge, and the younger sister to Bart and Lisa. She is often seen sucking on her orange pacifier and, when she walks, she trips over her clothing and falls on her face (this running gag is used much more in earlier seasons)',
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
        }];

    return (
        <div>
            <h1>Simpsons</h1>
            {simpsons.map(value => <Simpson key={value.id} simpson={value}/>)}
        </div>
    );
};

export {Simpsons};