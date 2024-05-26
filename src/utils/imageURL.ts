function imageURL(path:string|undefined) {
    var segments = path?.split(/[\\"\/]/);
    var fileName = segments?.pop();
    let url = `http://192.168.1.227:5000/api/images/${fileName}`
    return url;
}


export default imageURL;