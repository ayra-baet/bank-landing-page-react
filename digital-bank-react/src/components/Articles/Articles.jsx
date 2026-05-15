import imageCurrency from "../../assets/images/image-currency.jpg";
import imageRestaurant from "../../assets/images/image-restaurant.jpg";
import imagePlane from "../../assets/images/image-plane.jpg";
import imageConfetti from "../../assets/images/image-confetti.jpg";

import "./Articles.css";

const articles = [
    {
        id: 1,
        image: imageCurrency,
        author: "By Claire Robinson",
        title: "Receive money in any currency with no fees",
        description:  "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
        id: 2,
        image: imageRestaurant,
        author: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        description:  "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
        id: 3,
        image: imagePlane,
        author: "By Wilson Hutton",
        title: "Take your Digitalbank card wherever you go",
        description:  "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
        id: 4,
        image: imageConfetti,
        author: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description:  "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    },
];

function Articles() {
    return(
        <>
            {articles.map(article => (
                <article className="article__card" key={article.id}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className="article__card-image"
                    />
                    <div className="article__content">
                        <p className="article__content-author">{article.author}</p>
                        <h4 className="article__content-title">{article.title}</h4>
                        <p className="article__content-description">{article.description}</p>
                    </div>
                </article>
            ))}
        </>
    );
}

export default Articles;