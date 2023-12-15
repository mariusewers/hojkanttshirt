var products = [

    {
        id: 1,
        name: "Crew T-Shirt Phone",
        price: 199,
        image: "images/crew_back_phone.webp",
        description: "Crew Phone var den første t-shirt vi lavede her i højkant. Vi lavede den for at have en t-shirt der repræsenterede os. Men vi synes den var for fed til ikke at udgive. Så nu kan man købe den her på hjemmesiden. Figuren repræsenterer os og det vi står for, nemlig mobil produktioner.",
    },

    {
        id: 2,
        name: "Crew T-Shirt Peace",
        price: 199,
        image: "images/crew_back_peace.webp",
        description: "Crew Peace lavede vi efter Crew Phone. Eftersom vi er nogle stykker på holdet nu, gav det mening at lave flere t-shirts så havde forskelligt at vælge imellem. Samme koncept som crew t-shirt repræsenterer den også og hvad vi står for.",
    },

    {
        id: 3,
        name: "Roser",
        price: 199,
        image: "images/roser_front.webp",
        description: "Rose t-shirten er lavet på baggrund af et video koncept vi lavede. Vi filmede en rose suge frugtfarve, det ændrede farven på den og gjorde den mega fed. Hvis du vil se videoen skal du bare gå ind vores Instagram.",
    },

    {
        id: 4,
        name: "Toaster",
        price: 199,
        image: "images/toaster_front.webp",
        description: "Ligesom Rose t-shirten er toaster et koncept skabt ud af en video. Konceptet var at vi ville modbevise en kommentar på Rose videoen. Det lykkedes ret godt og det endte med at se mega cool ud.",
    },

    {
        id: 5,
        name: "På højkant",
        price: 199,
        image: "images/kortspil_front.webp",
        description: "På højkant t-shirten er et ordspil af ordet og højkant. Som der står på t-shirten betyder højkant også at det kan være en risiko når man gambler. Det er gevinsten der er risikoen, og hvis man er heldig løber man af sted med det hele.",
    },

    {
        id: 6,
        name: "Three Phones",
        price: 199,
        image: "images/three_phone_front.webp",
        description: "Three phones lavede vi fordi vi altid har Vores mobiler med, og motivet med 3d ser fedt ud og repræsenterer den moderne fremgang vi prøver at opnå. De 3 telefoner er ofte også det der skal til for at lave de produktioner som vi producerer.",
    },

    {
        id: 7,
        name: "Monogram",
        price: 199,
        image: "images/monogram_front.webp",
        description: "Den klassiske monogram t-shirt skal alle brands have en version af. Så det her er vores version, teksten får lige et 3d løft som gør at man kan mærke teksturen på t-shirten. Monogrammet er et ”h” gentaget 4 gange, der repræsenterer højkant.",
    },

    {
        id: 8,
        name: "Metalkant",
        price: 199,
        image: "images/metal_front.webp",
        description: "Metalkant er vores navn men i en liquid metal font. Den er mega rå og cool, processen i at lave den er som alt andet. Men det look den får er ikke noget der kan sammenlignes med noget andet.",
    },
   
];

var productsSection = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var productElement = document.createElement("div");
    productElement.className = "product";

    var productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    var productName = document.createElement("p");
    productName.textContent = product.name;

    var productPrice = document.createElement("p");
    productPrice.textContent = product.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" });

    productElement.appendChild(productImage);
    productElement.appendChild(productName);
    productElement.appendChild(productPrice);

    productElement.addEventListener("click", function (productId) {
        window.location.href = "details.html?id=" + productId;
    }.bind(null, product.id));

    productsSection.appendChild(productElement);
}