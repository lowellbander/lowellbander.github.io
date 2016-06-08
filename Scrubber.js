/**
 * Created by lowellbander on 6/8/16.
 */

class Scrubber {
    static build({name, min, max, onChange, defaultValue, step=1}) {
        var control = document.createElement('div');
        
        var label = document.createElement('label');
        label.innerHTML = name;
        label.setAttribute('for', name);
        control.appendChild(label);
        
        var slider = document.createElement('input');
        slider.setAttribute('type', 'range');
        slider.setAttribute('id', name);
        slider.setAttribute('min', min);
        slider.setAttribute('max', max);
        slider.setAttribute('value', defaultValue);
        slider.setAttribute('step', step);
        slider.oninput = onChange;
        control.appendChild(slider);
        
        return control;
    }
}
