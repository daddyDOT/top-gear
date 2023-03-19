import styles from './Preview.module.css'

const Preview = (props) => {
  console.log(props.data);

  let firstSelection;
  let secondSelection;
  let thirdSelection;

  switch(props.type)
  {
    case 'air': {
      firstSelection = [
        {name: "manufacturer", value: props.data.manufacturer},
        {name: "Model", value: props.data.model},
        {name: "max_speed_knots", value: props.data.max_speed_knots},
        {name: "height_ft", value: props.data.height_ft},
        {name: "length_ft", value: props.data.length_ft},
      ];

      secondSelection = [
        {name: "gross_weight_lbs", value: props.data.gross_weight_lbs},
        {name: "empty_weight_lbs", value: props.data.empty_weight_lbs},
        {name: "engine_thrust_lb_ft", value: props.data.engine_thrust_lb_ft},
        {name: "landing_ground_roll_ft", value: props.data.landing_ground_roll_ft},
        {name: "takeoff_ground_run_ft", value: props.data.takeoff_ground_run_ft},
        {name: "wing_span_ft", value: props.data.wing_span_ft},
      ];

      thirdSelection = [
        {name: "ceiling_ft", value: props.data.ceiling_ft},
        {name: "cruise_speed_knots", value: props.data.cruise_speed_knots},
        {name: "engine_type", value: props.data.engine_type},
        {name: "range_nautical_miles", value: props.data.range_nautical_miles},
        {name: "rate_of_climb_ft_per_min", value: props.data.rate_of_climb_ft_per_min},
      ];
      break;
    }
    case 'car': {
      firstSelection = [
        {name: "Producer", value: props.data.make},
        {name: "Model", value: props.data.model},
        {name: "Year", value: props.data.year},
        {name: "Class", value: props.data.class},
      ];

      secondSelection = [
        {name: "city_mpg", value: props.data.city_mpg},
        {name: "combination_mpg", value: props.data.combination_mpg},
        {name: "fuel_type", value: props.data.fuel_type},
        {name: "highway_mpg", value: props.data.highway_mpg},
      ];

      thirdSelection = [
        {name: "drive", value: props.data.drive},
        {name: "transmission", value: props.data.transmission},
        {name: "cylinders", value: props.data.cylinders},
        {name: "displacement", value: props.data.displacement},
      ];
      break;
    }
    case 'moto': {
      firstSelection = [
        {name: "Producer", value: props.data.make},
        {name: "Model", value: props.data.model},
        {name: "clutch", value: props.data.clutch},
        {name: "cooling", value: props.data.cooling},
        {name: "gearbox", value: props.data.gearbox},
        {name: "engine", value: props.data.engine},
        {name: "power", value: props.data.power},
        {name: "starter", value: props.data.starter},
        {name: "transmission", value: props.data.transmission},
        {name: "type", value: props.data.type},
        {name: "Year", value: props.data.year},
      ];

      secondSelection = [
        {name: "bore_stroke", value: props.data.bore_stroke},
        {name: "compression", value: props.data.compression},
        {name: "displacement", value: props.data.displacement},
        {name: "front_brakes", value: props.data.front_brakes},
        {name: "front_suspension", value: props.data.front_suspension},
        {name: "front_tire", value: props.data.front_tire},
        {name: "front_wheel_travel", value: props.data.front_wheel_travel},
        {name: "fuel_capacity", value: props.data.fuel_capacity},
        {name: "fuel_control", value: props.data.fuel_control},
        {name: "fuel_system", value: props.data.fuel_system},
        {name: "rear_brakes", value: props.data.rear_brakes},
        {name: "rear_suspension", value: props.data.rear_suspension},
        {name: "rear_tire", value: props.data.rear_tire},
        {name: "rear_wheel_travel", value: props.data.rear_wheel_travel},
      ];

      thirdSelection = [
        {name: "frame", value: props.data.frame},
        {name: "ground_clearance", value: props.data.ground_clearance},
        {name: "ignition", value: props.data.ignition},
        {name: "lubrication", value: props.data.lubrication},
        {name: "torque", value: props.data.torque},
        {name: "seat_height", value: props.data.seat_height},
        {name: "total_height", value: props.data.total_height},
        {name: "total_length", value: props.data.total_length},
        {name: "total_weight", value: props.data.total_weight},
        {name: "total_width", value: props.data.total_width},
        {name: "valves_per_cylinder", value: props.data.valves_per_cylinder},
        {name: "wheelbase", value: props.data.wheelbase},
      ];
      break;
    }
    case 'heli': {
      firstSelection = [
        {name: "manufacturer", value: props.data.manufacturer},
        {name: "Model", value: props.data.model},
        {name: "fuel_capacity_gallons", value: props.data.fuel_capacity_gallons},
        {name: "blade_material", value: props.data.blade_material},
        {name: "num_blades", value: props.data.num_blades},
      ];

      secondSelection = [
        {name: "height_ft", value: props.data.height_ft},
        {name: "length_ft", value: props.data.length_ft},
        {name: "storage_width_ft", value: props.data.storage_width_ft},
        {name: "main_rotor_diameter_ft", value: props.data.main_rotor_diameter_ft},
        {name: "max_speed_sl_knots", value: props.data.max_speed_sl_knots},
      ];

      thirdSelection = [
        {name: "rotor_type", value: props.data.rotor_type},
        {name: "cruise_speed_sl_knots", value: props.data.cruise_speed_sl_knots},
        {name: "cruise_time_min", value: props.data.cruise_time_min},
        {name: "external_load_limit_lbs", value: props.data.external_load_limit_lbs},
        {name: "gross_external_load_lbs", value: props.data.gross_external_load_lbs},
        {name: "range_nautical_miles", value: props.data.range_nautical_miles},
      ];
      break;
    }
    default: return console.log("invalid type");
  }

  return (
    <div>
      <div className={styles.cont}>
        <h1>Basic information</h1>
        {props.data && firstSelection.map((item) => <div className={styles.sections} key={item.name}>{item.name} {item.value}</div>)}
        
      </div>

      <div className={styles.cont} id="section2">
      <h1>More information</h1>
      {props.data && secondSelection.map((item) => <div className={styles.sections} key={item.name}>{item.name} {item.value}</div>)}
      </div>
      
      <div className={styles.cont}>
      <h1>Additional information</h1>
      {props.data && thirdSelection.map((item) => <div className={styles.sections} key={item.name}>{item.name} {item.value}</div>)}

      </div>

    </div>
  )
}

export default Preview