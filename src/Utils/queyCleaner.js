const queryCleaner = (query) => {
    let myArr = query.split('?'); 
    let searchArr = [];
    myArr.forEach(item => {
        let arr = item.split('=');
        if( arr.length > 1 ){
            searchArr.push({
                "field": arr[0],
                "value": arr[1]
            });
        }
        else {
            searchArr.push({
                'field' : "search",
                'value' : arr[0]
            })
        }
    });
    return searchArr;
};

export default queryCleaner;