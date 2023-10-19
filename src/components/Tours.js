import Card from "./Card";

function Tours({tours, removeTour}) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>
                    {
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                        // ...is spread operator. that means the copy of tour object is passed.
                        // whenever using map function with a component, make sure to pass key as an attribute as well
                    })
                }
            </div>
        </div>
    )
 
}

export default Tours;