import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Preview from './Preview';

const Form = () => {

  const [type, setType] = useState('air');
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
  
    return;
  }, [type])

  const Function = async () =>
  {
    let url;
    const arg = input.split(" ");
    try {
      if(!input || input === ' ')
      {
        return console.log('error1');
      }

      switch(type)
      {
        case 'air': {
          url = `${process.env.REACT_APP_AIRCRAFT_API_URL}manufacturer=${arg[0]}&model=${arg[1]}`;
          break;
        }
        case 'car': {
          url = `${process.env.REACT_APP_CARS_API_URL}limit=2&model=${arg[0]}`;
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
          url = `${process.env.REACT_APP_CARS_API_URL}limit=2&model=${arg[0]}`;
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
        <div className='buttons'>
            <Button onClick={() => setType('air')}>a</Button>
            <Button onClick={() => setType('car')}>b</Button>
            <Button onClick={() => setType('heli')}>c</Button>
            <Button onClick={() => setType('moto')}>d</Button>
        </div>

        <div className='search'>
            <input placeholder='Search for a vehicle...' onChange={(e) => setInput(e.target.value)}></input>
            <Button onClick={() => Function()}>Go</Button>
        </div>

        {data ? <Preview data={data} type={type} /> : <img src='https://img.freepik.com/free-vector/empty-concept-illustration_114360-1253.jpg?w=2000'></img>}

    </div>
  )
}

export default Form