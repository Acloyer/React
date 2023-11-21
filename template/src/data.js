class Slide {
    constructor(title, src, description) {
        this.title = title;
        this.src = src;
        this.description = description;
    }
}

const data = [
    new Slide('title 1', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 'description 1'),
    new Slide('title 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52qqyY2Mosgxt-Pt00pZy4TqIhCanFTwyLwC-D0z5&s', 'description 2'),
    new Slide('title 3', 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg', 'description 3'),
    new Slide('title 4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x42tmAKex3xSGmmajDgLr1KfDMwP3fNwRsuoQ-yn&s', 'description 4')
];

export default data;