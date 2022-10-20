   
   
   import './mobileHome.css'
   
   const Mobilehome = () =>{
    return (
        <div>
            <div className="mainconteiner">
                    <div  className='head'>
                    <img src={require("./assets/logo.png")}/>
                    <div className='categories'>
                      <img src={require("./assets/Shape.png")}/>
                      <img src={require("./assets/ShapeMove.png")}/>
                      <img src={require("./assets/ShapeTV.png")}/>
                      <img src={require("./assets/Path.png")}/>
                    </div>
                      <img src={require("./assets/Oval.png")}/>
                    </div>
                    <div className='search'>
                      <img  src={require("./assets/ShapeSearch.png")}/>
                      <input placeholder="Search for movies or TV series" className="input" ></input>
                    </div>
                      <h1  >Trending</h1>
                    <div className='containerSlider'>
                    <div className='slider'>
                        <div   className='BeyondEarth'>
                      <div className='info'>
                        <a>2019</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                         <h2 className='sliderh2'>Beyond Earth</h2>
                     </div>

                    <div className='BottomGear'>
                        <div className='info'>
                        <a>2021</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                         <h2 className='sliderh2'>Bottom Gear</h2>
                        </div>

                        <div className='UndiscoveredCities'>
                        <div className='info'>
                        <a>2019</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>TV series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                         <h2 className='sliderh2'>Undiscovered Cities</h2>
                        </div>

                        <div className='A1998'>
                        <div className='info'>
                        <a>2021</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                         <h2 className='sliderh2'>1998</h2>
                        </div>


                        <div className='Moon'>
                        <div className='info'>
                        <a>2018</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                         <h2 className='sliderh2'>Dark Side of the Moon</h2>
                        </div>


                    </div>
                    </div>
                    <h1>Recommended for you</h1>
                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/Rectangle.png")}/>
                        <div className='info1'>
                        <a>2019</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>The Great Lands</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/The Diary.png")}/>
                        <div className='info1'>
                        <a>2019</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>The Diary</h2>
                        </div>
                        </div>


                        

                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/EarthsUntouched.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>Earth’s Untouched</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/NoLandBryond.png")}/>
                        <div className='info1'>
                        <a>2019</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>No Land Beyond</h2>
                        </div>
                    </div>


                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/DuringtheHunt.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>During the Hunt</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/AutosporttheSeries.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>No Land Beyond</h2>
                        </div>
                    </div>



                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/SameAnswer.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movie</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>During the Hunt</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/BelowEcho.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>No Land Beyond</h2>
                        </div>
                    </div>


                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/TheRockies.png")}/>
                        <div className='info1'>
                        <a>2015</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>During the Hunt</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/Realentless.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>No Land Beyond</h2>
                        </div>
                    </div> 



                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/CommunityofOurs.png")}/>
                        <div className='info1'>
                        <a>2018</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>Community of Ours</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/VanLife.png")}/>
                        <div className='info1'>
                        <a>2015</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>Van Life</h2>
                        </div>
                    </div>



                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/TheHeiress.png")}/>
                        <div className='info1'>
                        <a>2021</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>The Heiress</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/OfftheTrack.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>Van Life</h2>
                        </div>
                    </div>


                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/WhisperingHill.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>The Heiress</h2>

                        </div>

                        <div className='margin'>
                        <img src={require("./assets/112.png")}/>
                        <div className='info1'>
                        <a>2013</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>112</h2>
                        </div>
                    </div>


                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/LoneHeart.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>Lone Heart</h2>
                        </div>

                        <div className='margin'>
                        <img src={require("./assets/ProductionLine.png")}/>
                        <div className='info1'>
                        <a>2018</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>Production Line</h2>
                        </div>
                    </div>

                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/dogss.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>E</a>
                        </div>
                        <h2 className='h2'>Dogs</h2>
                        </div>

                        <div className='margin'>
                        <img src={require("./assets/Asiain24Days.png")}/>
                        <div className='info1'>
                        <a>2020</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>Asia in 24 Days</h2>
                        </div>
                    </div>

                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/TheTastyTour.png")}/>
                        <div className='info1'>
                        <a>2016</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>The Tasty Tour</h2>
                        </div>

                        <div className='margin'>
                        <img src={require("./assets/Darker.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>Darker</h2>
                        </div>
                    </div>

                    <div className='box1'>
                        <div className='margin'>
                        <img src={require("./assets/UnresolvedCases.png")}/>
                        <div className='info1'>
                        <a>2018</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/seriesTV.png")}/>
                        <a>TV Series</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>18+</a>
                        </div>
                        <h2 className='h2'>Unewsolced Cases</h2>
                        </div>

                        <div className='margin'>
                        <img src={require("./assets/MissionSaturn.png")}/>
                        <div className='info1'>
                        <a>2017</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <img src={require("./assets/ShapeSmall.png")}/>
                        <a>Movies</a>
                        <img src={require("./assets/OvalSmall.png")}/>
                        <a>PG</a>
                        </div>
                        <h2 className='h2'>Mission: Saturn</h2>
                        </div>
                    </div>

                 
                </div>
            </div>
    )
        
        
        
    
   
}
export default Mobilehome;