import * as React from 'react';

export class CarsList extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
      
  }
  render() {
    let { list, addCar } = props;
    return(
      <div>
        <ul>
          <h1>Lista de autos</h1>
          <div class="row">
           <div class="col s12">
             <div class="row">
               <div class="input-field col s12">
                 <i class="material-icons prefix">textsms</i>
                 <input type="text" id="autocomplete-input" class="autocomplete">
                 <label for="autocomplete-input">Autocomplete</label>
               </div>
             </div>
           </div>
         </div>
          {
            list.map((car, i) => {
              return <li key={i}>{car.plate}</li>
            })
          }
        </ul>
      </div>
  }
  )
}
