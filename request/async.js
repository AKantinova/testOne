const request = reguire ('request');

request.get(
    "https://api.opendota.com/api/proMatches",
    (data, err, body) => {
        let parseBody=JSON.parse(body);
        let arr =[];
        parseBody.forEach((elem) => {
            arr.push(elem.text);  
        });

        arr.map((elem)=>{
            console.log('${elem}\n');
        });
    }

);