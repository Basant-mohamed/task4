class Movie{
    constructor( _id , name ,pic,actors,director ,reviews ,downloadTimes ,watchesTimes ,video)
    {
       this._id =_id
       this.name = name  
       this.pic = pic
       this.actors = actors
       this.director =director
       this.reviews = reviews
       this.downloadTimes= downloadTimes
       this.watchesTimes = watchesTimes
       this.video = video
    }


}

module.exports = Movie