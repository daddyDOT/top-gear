import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Preview from './Preview';
import Recommended from './Recommended';
import styles from './Form.module.css'

const Form = () => {

  const [type, setType] = useState('air');
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);

  const GetProperText = () => {
    switch(type)
    {
      case 'air': return 'Search for an airplane...';
      case 'car': return 'Search for a car...';
      case 'heli': return 'Search for a helicopter...';
      case 'moto': return 'Search for a motocycle...';
      default: return 'Search for a vehicle...';
    }
  }

  useEffect(() => {
    setData(null);
    return;
  }, [type])

  const Function = async () =>
  {
    try {
      if(!input || input === ' ')
      {
        return console.log('error1');
      }
      
      let url;
      const arg = input.split(" ");
      
      switch(type)
      {
        case 'air': {
          url = `${process.env.REACT_APP_AIRCRAFT_API_URL}manufacturer=${arg[0]}&model=${arg[1]}`;
          break;
        }
        case 'car': {
          url = `${process.env.REACT_APP_CARS_API_URL}limit=1&model=${arg[0]}`;
          break;
        }
        case 'moto': {
          url = `${process.env.REACT_APP_MOTORCYCLES_API_URL}make=${arg[0]}&model=${arg[1]}`;
          break;
        }
        case 'heli': {
          url = `${process.env.REACT_APP_HELICOPTERS_API_URL}manufacturer=${arg[0]}&model=${arg[1]}`;
          break;
        }
        default: return console.log('undefined type');
      }

      const response = await fetch(url, {
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
        contentType: 'application/json'
      });
      const data = await response.json();

      console.log(url);
      console.log(data);

      if(data.length === 0)
      {
        let res, check;
        url = `${process.env.REACT_APP_AIRCRAFT_API_URL}manufacturer=${arg[0]}&model=${arg[1]}`;
        res = await fetch(url, {
          headers: {
            "X-Api-Key": process.env.REACT_APP_API_KEY,
          },
          contentType: 'application/json'
        });
        check = await res.json();

        if(check.length === 0)
        {
          url = `${process.env.REACT_APP_CARS_API_URL}limit=1&model=${arg[0]}`;
          res = await fetch(url, {
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
            },
            contentType: 'application/json'
          });
          check = await res.json();

          if(check.length === 0)
          {
            url = `${process.env.REACT_APP_MOTORCYCLES_API_URL}make=${arg[0]}&model=${arg[1]}`;
            res = await fetch(url, {
              headers: {
                "X-Api-Key": process.env.REACT_APP_API_KEY,
              },
              contentType: 'application/json'
            });
            check = await res.json();

            if(check.length === 0)
            {
              url = `${process.env.REACT_APP_HELICOPTERS_API_URL}manufacturer=${arg[0]}&model=${arg[1]}`;
              res = await fetch(url, {
                headers: {
                  "X-Api-Key": process.env.REACT_APP_API_KEY,
                },
                contentType: 'application/json'
              });
              check = await res.json();

              if(check.length === 0)
              {
                console.log('nije pronadjeno uopste');
              }
              else {
                console.log('pronadjeno u: helis')
              }
            }
            else {
              console.log('pronadjeno u: motos')
            }
          }
          else {
            console.log('pronadjeno u: cars')
          }
        }
        else {
          console.log('pronadjeno u: airplanes')
        }
      }
      else
      {
        setData(data[0]);
      }

      return;

    } catch {
      console.log('error');
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <hr></hr>
        <div className={styles.buttons}>
            <Button variant="outlined" onClick={() => setType('air')}><img alt="" src={require('../../images/departures.png')}></img></Button>
            <Button variant="outlined" onClick={() => setType('car')}><img alt="" src={require('../../images/car.png')}></img></Button>
            <Button variant="outlined" onClick={() => setType('heli')}><img alt="" src={require('../../images/helicopter.png')}></img></Button>
            <Button variant="outlined" onClick={() => setType('moto')}><img alt="" src={require('../../images/motorcycle.png')}></img></Button>
        </div>

        <div className={styles.search}>
            <input type="text" placeholder={GetProperText()} onChange={(e) => setInput(e.target.value)}></input>
            <Button variant="outlined" onClick={() => Function()}>Go</Button>
        </div>

        <p id="section1"></p>
        {data ? <Preview data={data} type={type} /> : <div className={styles.box}><img alt="" src={require('../../images/empty-box.png')}></img></div>}
        <p id="section2"></p>
      </div>
      <hr></hr>
      <Recommended />
    </div>
  )
}

export default Form