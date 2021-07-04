const text=document.getElementById('quote');
const author=document.getElementById('author');
const newQuote=document.getElementById('new-quote');
const twitterButton=document.getElementById('twitter');

//Getquote function-
async function getQuote(){
    const proxyUrl='https://cors-anywhere.herokuapp.com/';
    const apiUrl='https://free-quotes-api.herokuapp.com/'; 

    try{
         const response = await fetch(apiUrl);
        //  console.log(response);
        const data=await response.json();
        // console.log(data)
        text.innerText=data.quote;
        author.innerText=`-${data.author}`;
        if(text === ' ' || text===''||author === ' ' || author===''){
            alert('Please Refesh the page');
        }
    }
    catch (error){
        // getQuote();
        console.log("Sorry, no quote generated",error);
    }
}

function tweetQuote(){
    var quoteText=text.innerText;
    var quoteAuthor=author.innerText;
    var twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText}-${quoteAuthor}`;
    window.open(twitterUrl,'_blank');
}

getQuote();

newQuote.addEventListener('click',()=>getQuote());
twitterButton.addEventListener('click',()=>tweetQuote());





