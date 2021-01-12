const Movie = require('./movie')

var movieArr = [] 

movieArr.push(new Movie( "fwqddv132gce57768979123dd","The Pursuit of Happyness" ,"../assets/purst.jpeg" ,["Will Smith " , "Thandie Newton" , "Jaden Christopher"],
"Gabriele Muccino " ,5 , 100 , 800 , "videoLink"),
new Movie( "fhdv132wqw7768979123dd","El arhab we el kabab" ,"../assets/elkabab.jpg" , ["adel emam" , "Yusra"],
"sherif arafa" ,4 , 10 , 30 , "videoLink"),
new Movie( "hdv132gce57768979123dd","El badla" ,"../assets/elbadla.jpg" ,["tamer hosny" , "amina kalel" , "akram hosny"],
"sherif arafa" ,3 , 100 , 300 , "videoLink")
)

module.exports = movieArr