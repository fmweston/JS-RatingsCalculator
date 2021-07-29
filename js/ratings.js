function collect_ratings(){
    let rating = 0;

    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    const elements = document.querySelectorAll('rating');

    elements.foreach(element => {
        rating = parseInt(element.id.replace('star',''));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value)*ratings;
    });

    if(count != 0){
        ratings.average = sum/count;
    }

    return ratings;    
}

document.addEventListener('change',(event) => {
    const ratings = collect_rating('average');
    document.querySelector('average', ratings.average.toFixed(2));
});