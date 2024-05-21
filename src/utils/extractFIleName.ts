function extractFileName(path:string) {
    var segments = path.split(/[\\"\/]/);
    var fileName = segments.pop();
    return fileName;
}


export default extractFileName;