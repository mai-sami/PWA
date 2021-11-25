import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Flickity from 'react-flickity-component'
import msg from '.././assets/image/messenger.png'
import foodim from '.././assets/image/foodim.png'
import { InputGroup } from 'react-bootstrap';
import 'flickity/dist/flickity.min.css';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import yallow from '.././assets/image/yallow.png'
import green from '.././assets/image/green.png'
import greens from '.././assets/image/greens.png'
import red from '.././assets/image/red.png'
import yellow from '.././assets/image/yellow.png'
import smGreen from '.././assets/image/smGreen.png'
 
import BigGreen from '.././assets/image/BigGreen.png'

import reds from '.././assets/image/reds.png'

import { makeStyles, useTheme } from "@material-ui/core/styles";
//  import Flickity from'react-flickity';
import calories from '.././assets/image/calories2.png'

import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
var foods = [{ day: "اليوم الأول", image: foodim, role: "foods", descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "اليوم الأول", role: "foods", image: foodim, descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "اليوم الأول", image: msg, descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "اليوم الأول", image: msg, role: "foods", descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },

{ day: "اليوم الأول", image: msg, descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "اليوم الأول", image: msg, role: "foods", descr: "اختر الوجبة المناسبة", name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },

];

const getBadgeColor = role => {
  switch (role) {
    case "foods":
      return "#FF987A";
      case "foodss":
      return "#F4BB50";
      case "Dinner":
        return "#84C504";
        case "Snacks":
          return "#FA858C";
          case "meals":
            return "#749466";
    default:
      return "gray";
  }
};
const useStyles = makeStyles(theme => ({

  active: {
    background: "#FF987A !important",
    color: "white !important"
  },

  actives: {
    background: "#F4BB50 !important",
    color: "white !important"
  },
  Dinner: {
    background: "#84C504 !important",
    color: "white !important"
  },
  Snacks: {
    background: "#FA858C !important",
    color: "white !important"
  }
  ,
  meals: {
    background: "#749466 !important",
    color: "white !important"
  }
}));
function TAbs() {

  const [check, setCheck] = React.useState(false)
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState('1');
  const flickityOptions = {
    initialIndex: 4
  }


  const handleChange = (event, newValue) => {

    setValue(newValue);
  };


  const handleChecks = () => {
    setCheck(true);
    return "#000"

  };

  return (
    <div className="home__section">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="الفطور"
                className={value === "1" ? classes.active : ""}

                value="1"
              />

              <Tab label="الغذاء  "
                className={value === "2" ? classes.actives : ""}

                value="2" />
              <Tab label="العشاء  "

                className={value === "3" ? classes.Dinner : ""}
                value="3" />
              <Tab label="وجبات جانبية  "
                className={value === "4" ? classes.Snacks : ""}

                value="4" />
              <Tab label="وجبات خفيفة  "
                className={value === "5" ? classes.meals : ""}

                value="5" />

            </TabList>
          </Box>
          {foods.map((food, id) => (
            <TabPanel

              className="text__div"
              value="1">

              <span className="flex__foods__PP">{food.day}  </span>
              <span className="flex__foods__PPs">{food.descr}    </span>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false


                data-flickity='{ "groupCells": true }'>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

                {foods.map((food) => (

                  <div class="carousel-cell" style={{ border: `1.5px solid ${getBadgeColor(food.role)} ` }} onClick={handleChecks}  >
                    {
                      check ? (
                        <InputGroup.Checkbox id="checks"
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                      ) : (<div></div>)
                    }

                    <img src={foodim} class="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img" src={calories} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>

                  </div>
                ))}
              </Flickity>


            </TabPanel>
          ))}

          {foods.map((food) => (
            <TabPanel value="2"
              className="text__div"     >

              <span className="flex__foods__PP">{food.day}  </span>
              <span className="flex__foods__PPs">{food.descr}    </span>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false

                data-flickity='{ "groupCells": true }'>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

                {foods.map((food) => (

                  <div value="2" class="carousel-cell"    style={{ border: `1.5px solid ${getBadgeColor(food.role)} ` }}
                  onClick={handleChecks}  >
                    {
                      check ? (
                        <InputGroup.Checkbox id="checks"
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                      ) : (<div></div>)
                    }

                    <img src={yallow} class="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img" src={yellow} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>

                  </div>
                ))}

              </Flickity>

            </TabPanel>
          ))}



          {foods.map((food) => (
            <TabPanel value="3"
              className="text__div"     >

              <span className="flex__foods__PP">{food.day}  </span>
              <span className="flex__foods__PPs">{food.descr}    </span>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false

                data-flickity='{ "groupCells": true }'>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

                {foods.map((food) => (

                  <div class="carousel-cell" style={{ border: `1.5px solid ${getBadgeColor(food.role)} ` }} onClick={handleChecks}  >
                    {
                      check ? (
                        <InputGroup.Checkbox
                         id="checks"
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                      ) : (<div></div>)
                    }

                    <img src={green} class="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img" src={smGreen} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>

                  </div>
                ))}

              </Flickity>

            </TabPanel>
          ))}


          {foods.map((food) => (
            <TabPanel value="4"
              className="text__div"     >

              <span className="flex__foods__PP">{food.day}  </span>
              <span className="flex__foods__PPs">{food.descr}    </span>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false

                data-flickity='{ "groupCells": true }'>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

                {foods.map((food) => (

                  <div class="carousel-cell" style={{ border: `1.5px solid ${getBadgeColor(food.role)} ` }} onClick={handleChecks}  >
                    {
                      check ? (
                        <InputGroup.Checkbox id="checks"
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                      ) : (<div></div>)
                    }

                    <img src={red} class="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img" src={reds} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>

                  </div>
                ))}

              </Flickity>

            </TabPanel>
          ))}


          {foods.map((food) => (
            <TabPanel value="5"
              className="text__div"     >

              <span className="flex__foods__PP">{food.day}  </span>
              <span className="flex__foods__PPs">{food.descr}    </span>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false

                data-flickity='{ "groupCells": true }'>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}

                {foods.map((food) => (

                  <div class="carousel-cell" style={{ border: `1.5px solid ${getBadgeColor(food.role)} ` }} onClick={handleChecks}  >
                    {
                      check ? (
                        <InputGroup.Checkbox id="checks"
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                      ) : (<div></div>)
                    }

                    <img src={greens} class="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img" src={BigGreen} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>

                  </div>
                ))}

              </Flickity>

            </TabPanel>
          ))}


        </TabContext>
      </Box>

    </div>
  )
}

export default TAbs
