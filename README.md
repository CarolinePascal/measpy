# measpy - Measurements with Python

measpy is a set of classes and methods to help the data acquisition and analysis of signals. It is mainly acoustics and vibrations oriented.

The base classes are:
- Signal: It is basically a class that contain a 1D numpy array, an a few other properties to describe the data as: sampling frequency, calibration and unit.
- Spectral: A spectral data class that contains the complex amplitudes as a 1D numpy array for frequencies up to the Nyquist frequency, and some properties as sampling frequency, unit, description
- Measurement : A class that describe a data acquisition process, its outputs (Signal objects), its inputs (Signal objects)...

For now, these daq devices are implemented :
    - Audio cards, via the ```sounddevice``` package,
    - NI DAQ cards, via the ```nidaqmx``` package.

## Usage example

Consider the following experiment:
- a white noise between 20Hz and 20kHz is sent to output 1 of the soundcard
- a pressure is acquired at input 1 (Unit pascals)
- an acceleration is acquired at input 2 (unit m/s^2)
- the sampling frequency is 44100Hz
- the calibration of signal conditionners are : 1V/pascal, 0.1V/(m/s^2)
- the soundcard input is 5V for a unit sample (input or output)
- the duration of the measurement is 5s

```python
import measpy.audio as ma
import matplotlib.pyplot as plt

M1 = ma.Measurement(out_sig='noise',
                    out_map=[1],
                    out_desc=['Output noise'],
                    in_map=[1,2],
                    in_desc=['Pressure','Acceleration'],
                    in_cal=[1.0,0.1],
                    in_unit=['Pa','m/s**2'],
                    in_dbfs=[5.0,5.0]
                    dur=5)
M1.run_measurement()
```

To plot the resulting data:
```python
M1.plot_with_cal()
plt.show()
```

Save Measurement object into a pickle file:
```
M1.to_pickle('file.mck')
```

Load a measurement file into the Measurement object M2:
```python
M2=ma.Measurement()
M2.from_pickle('file.mck')
```
Or simply:
```python
M2=ma.load_measurement_from_pickle('file.mck')
```
Other formats are possible : A combination of a cvs file and wave files, or a json+wave files. See from_csvwav() or from_jsonwav() methods.

Compute transfer functions:
```python
[f,H]= M1.tfe()
plt.plot(f,20*np.log10(np.abs(H)))
```
All the data is stored into the data property. It is basically a dict of signals, the keys being set by the in_desc and out_desc arguments when measurement is called.

To plot only the measured pressure:
```python
M1.data['Pressure'].plot()
```

Calculate the power spectral density of the pressure (Welch's method on 2**12 points, 50% overlaping):
```python
PressPSD = M1.data['Pressure'].psd(nperseg=2**12)
```

PressPSD is now a ```Spectral``` class object. It has its own methods. For instance, to plot the data:
```python
PressPSD.plot()
```
