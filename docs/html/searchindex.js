Search.setIndex({"docnames": ["1_play_with_signals", "2_spectral_data", "3_measurements", "4_spectrum_smoothing_and_weighting", "README", "copyright", "index", "measpy", "modules"], "filenames": ["1_play_with_signals.md", "2_spectral_data.md", "3_measurements.md", "4_spectrum_smoothing_and_weighting.md", "README.md", "copyright.rst", "index.rst", "measpy.rst", "modules.rst"], "titles": ["Tutorial 1: Play with the measpy.Signal class", "Tutorial 2: measpy.Spectral class", "Tutorial 3: The measpy.Measurement class", "Tutorial 4: The measpy.Weighting class", "measpy - Measurements with Python", "GNU LESSER GENERAL PUBLIC LICENSE", "Welcome to measpy\u2019s documentation!", "measpy package", "measpy"], "terms": {"The": [0, 1, 4, 5, 7], "describ": [0, 4, 7], "sampl": [0, 1, 4, 7], "tempor": [0, 7], "It": [0, 1, 4, 7], "core": 0, "measur": [0, 1, 6, 8], "which": [0, 1, 4, 5, 7], "help": [0, 4], "perform": [0, 4, 5, 7], "data": [0, 1, 4, 5, 7], "acquisit": [0, 4, 7], "henc": [0, 7], "import": [0, 1, 4], "understand": [0, 7], "its": [0, 4, 5, 7], "inner": 0, "work": [0, 4, 5, 7], "an": [0, 1, 4, 5, 7], "object": [0, 1, 4, 5, 7], "follow": [0, 1, 4, 5, 7], "properti": [0, 1, 4, 7], "A": [0, 4, 5, 7], "frequenc": [0, 1, 4, 7], "f": [0, 1, 7], "physic": [0, 1, 7], "cal": [0, 1, 7], "per": 0, "volt": [0, 1, 7, 8], "come": 0, "from": [0, 1, 4, 5, 7], "daq": [0, 4], "multipl": 0, "constant": 0, "dbf": [0, 1, 7], "express": [0, 7], "voltag": [0, 1, 7], "amplitud": [0, 1, 4, 7], "acquir": [0, 4], "equal": 0, "one": [0, 1, 4, 5, 7], "thi": [0, 1, 4, 5, 7], "classic": 0, "quantiti": [0, 7], "when": [0, 1, 4, 5, 7], "audio": [0, 4, 6, 8], "card": [0, 4, 7], "can": [0, 1, 4, 5, 7], "ignor": 0, "kept": 0, "0": [0, 1, 4, 5, 7], "most": [0, 1, 7], "numpi": [0, 1, 4, 7], "arrai": [0, 1, 4, 7], "_rawvalu": [0, 7], "correspond": [0, 4, 5, 7], "raw": [0, 7, 8], "given": [0, 1, 4, 5, 7], "digit": 0, "process": [0, 4, 7], "descript": [0, 1, 4, 7], "desc": [0, 1, 7], "string": [0, 1, 7], "here": [0, 1], "case": [0, 1], "we": [0, 1, 4], "want": [0, 1, 4], "us": [0, 1, 4, 5, 7], "local": [0, 1], "measi": [0, 1], "directori": [0, 1], "sy": [0, 1], "path": [0, 1], "insert": [0, 1], "mp": [0, 1, 4], "np": [0, 1], "let": [0, 1], "u": [0, 1], "creat": [0, 1, 4, 7], "": [0, 1, 4, 5, 7], "44100": [0, 1, 7], "hz": [0, 1, 7], "If": [0, 4, 5, 7], "ar": [0, 1, 4, 5, 7], "specifi": [0, 4, 5, 7], "thei": [0, 1, 7], "default": [0, 1, 7], "dimensionless": [0, 1, 4, 7], "respect": 0, "And": [0, 4], "content": [0, 8], "doesn": 0, "t": [0, 7, 8], "exist": 0, "none": [0, 5, 7], "print": [0, 1, 4, 7], "As": [0, 1, 5], "abov": [0, 4, 7], "isn": 0, "veri": 0, "give": [0, 4, 5], "some": [0, 1, 4], "instanc": [0, 1, 4, 7], "sinusoid": 0, "100hz": 0, "durat": [0, 1, 4, 7], "second": [0, 1, 4, 7], "sin": 0, "pi": 0, "100": [0, 1], "arang": 0, "1000hz": 0, "note": [0, 7], "_": [0, 4], "rawvalu": 0, "instead": 0, "would": [0, 5], "lead": 0, "same": [0, 4, 5, 7], "result": [0, 1, 4, 7], "more": [0, 4], "precis": 0, "actual": [0, 4, 7], "shortcut": 0, "setter": [0, 7], "getter": [0, 7], "method": [0, 1, 4, 7], "now": [0, 1, 2, 4], "contain": [0, 1, 4, 5, 7], "plot": [0, 1, 4, 7, 8], "axessubplot": [0, 1], "xlabel": [0, 1], "time": [0, 1, 5, 7, 8], "all": [0, 1, 4, 7], "what": 0, "have": [0, 1, 4, 5], "done": [0, 1, 4, 7], "befor": [0, 4, 7], "could": [0, 1, 4], "step": [0, 4], "initi": [0, 7], "phase": [0, 1, 7], "below": [0, 1, 4, 5, 7], "samplingfreq": 0, "There": 0, "lot": 0, "additionn": [0, 7], "For": [0, 1, 4, 5, 7], "vector": 0, "These": 0, "store": [0, 4, 7], "memori": 0, "ask": 0, "calcul": [0, 1, 4, 7], "base": [0, 4, 5, 7], "number": [0, 5, 7], "exampl": [0, 1, 6], "dur": [0, 1, 4, 7, 8], "00000000e": 0, "00": 0, "26762512e": 0, "05": 0, "53525023e": 0, "9": 0, "99954647e": 0, "01": 0, "99977324e": 0, "consid": [0, 1, 4, 5], "veloc": [0, 7], "meter": 0, "In": [0, 1, 4, 7], "order": [0, 1, 7], "optionn": [0, 7], "argument": [0, 1, 4, 5, 7], "velsig": 0, "m": [0, 4, 7], "forc": 0, "newton": 0, "n": [0, 1, 7], "wai": 0, "forcesig": 0, "two": [0, 1, 7], "multipli": [0, 1], "togeth": [0, 5], "instantan": 0, "power": [0, 4, 7], "simpli": [0, 7], "howver": 0, "possibl": [0, 1, 4, 7], "standard": [0, 7], "dimens": [0, 1, 4, 7], "command": [0, 1], "convert": [0, 7], "watt": 0, "unit_to_std": [0, 7, 8], "w": [0, 7], "similar": [0, 1, 5, 7, 8], "make": [0, 5], "copi": [0, 5, 7], "modifi": [0, 5], "do": [0, 1, 2, 3, 4, 5], "chang": [0, 5, 7], "system": [0, 1, 4, 5, 7], "convers": [0, 7], "addit": [0, 1, 5], "compat": [0, 1, 5, 7], "cannot": [0, 7], "add": [0, 1, 7], "should": [0, 1, 4, 7], "rais": [0, 1, 7], "except": [0, 1, 5, 7], "traceback": [0, 1], "recent": [0, 1], "call": [0, 1, 4, 5, 7], "last": [0, 1], "ipython": [0, 1], "input": [0, 1, 4, 7], "19": 0, "4fcb25564c19": 0, "modul": [0, 1, 4, 6, 8], "venv": 0, "numer": [0, 5], "lib": 0, "python3": 0, "8": [0, 7], "site": 0, "packag": [0, 4, 6, 8], "py": [0, 1], "__add__": [0, 1], "self": [0, 1, 7], "other": [0, 1, 4, 5, 7], "553": 0, "554": 0, "type": [0, 1, 4, 7], "555": 0, "return": [0, 1, 4, 7], "_add": [0, 1], "556": 0, "557": 0, "float": [0, 1, 7], "int": [0, 1, 7], "533": 0, "534": 0, "same_dimensions_a": [0, 1], "535": 0, "incompat": [0, 1, 7], "sginal": 0, "536": 0, "537": 0, "ad": [0, 1], "differ": [0, 5, 7], "decamet": 0, "them": [0, 1], "final": 0, "distance1": 0, "length": [0, 5, 7, 8], "distance2": 0, "anoth": [0, 1], "120": 0, "dam": 0, "distancetot": 0, "first": 0, "operand": 0, "That": 0, "why": 0, "get": [0, 4], "switch": 0, "thing": [0, 4], "might": [0, 4], "millimet": 0, "unit_to": [0, 7, 8], "mm": 0, "ani": [0, 5], "oper": [0, 1, 4, 5], "necessit": 0, "try": 0, "previou": 0, "error": 0, "samplingfreq2": 0, "48000": 0, "forcesig2": 0, "48000hz": 0, "forcetot": 0, "23": 0, "beb9d939dcca": 0, "538": 0, "539": 0, "But": 0, "resampl": [0, 7, 8], "match": 0, "orther": 0, "up": [0, 1, 4, 7], "didn": 0, "care": 0, "about": 0, "fact": 0, "onli": [0, 1, 4, 5, 7], "synthes": 0, "wouldn": 0, "reason": [0, 1], "where": [0, 5, 7], "acceleromet": 0, "torqu": 0, "sensor": 0, "microphon": 0, "optic": 0, "devic": [0, 4, 7], "involv": 0, "conditionn": [0, 4], "gener": [0, 4, 7], "produc": [0, 5], "proportionn": 0, "captur": 0, "directli": 0, "With": 0, "line": [0, 5], "sound": [0, 4], "valu": [0, 1, 4, 7, 8], "coeffici": 0, "true": [0, 7], "divid": [0, 1], "wa": [0, 5], "2v": 0, "5": [0, 1, 4, 7], "incom": [0, 7], "access": 0, "preferr": 0, "0142471": 0, "02849132": 0, "04272974": 0, "go": [0, 1], "07123552": 0, "14245658": 0, "21364872": 0, "03561776": 0, "07122829": 0, "10682436": 0, "prefer": [0, 4], "format": [0, 4, 7], "save": [0, 4, 7], "combin": [0, 4, 5], "csv": [0, 4, 7], "wav": [0, 4, 7], "to_csvwav": [0, 4, 7, 8], "take": 0, "To": [0, 1, 2, 3, 4], "load": [0, 4, 7], "again": 0, "classmethod": [0, 7], "from_csvwav": [0, 4, 7, 8], "vel": 0, "also": [0, 1, 4, 5, 7], "from_wav": [0, 7, 8], "allow": [0, 1, 5, 7], "name": [0, 4, 7], "paramet": [0, 5, 7], "necessari": [0, 5], "etc": [0, 1, 4, 7], "fourier": [1, 7], "analys": [1, 7], "signal": [1, 4, 6, 8], "ma": 1, "unyt": [1, 7], "1d": [1, 4, 7], "spectrum": [1, 7], "full": [1, 4, 7], "boolean": 1, "indic": [1, 7], "nyquist": [1, 4], "i": [1, 4, 5, 6, 7], "matplotlib": [1, 4, 7], "pyplot": [1, 4, 7], "plt": [1, 4], "white": [1, 4], "nois": [1, 4, 7, 8], "freq": [1, 7, 8], "22050": 1, "20": [1, 4, 7], "22050hz": 1, "1": [1, 4, 5, 6, 7], "filter": [1, 4, 7], "iir": [1, 7, 8], "basic": [1, 4, 6, 7], "wrapper": [1, 7], "function": [1, 4, 5, 7], "around": [1, 7], "scipi": [1, 7], "iirfilt": 1, "sosfilt": 1, "between": [1, 4, 7], "1000": [1, 7], "2000": [1, 7], "6th": 1, "butterworth": 1, "noisef": 1, "wn": [1, 7], "btype": [1, 7], "lowpass": 1, "ftype": [1, 7], "butter": [1, 7], "fft": [1, 7, 8], "real": [1, 7, 8], "fair": 1, "rfft": [1, 7, 8], "complex": [1, 4, 7], "By": 1, "db": [1, 7, 8], "ref": [1, 7], "uniti": 1, "logarithm": [1, 7], "scale": [1, 4, 7], "ax": [1, 4, 7], "noisesp": 1, "0x7f448a9e9fa0": 1, "ylabel": 1, "log": [1, 7], "h": [1, 7], "dtype": 1, "irfft": [1, 4, 7, 8], "back": 1, "domain": 1, "commput": 1, "respons": [1, 4, 7], "welch": [1, 4, 7], "transfer": [1, 4, 7], "estim": [1, 7], "compar": 1, "theoret": 1, "sosfreqz": 1, "sp": [1, 4], "tfe_welch": [1, 4, 6, 7, 8], "nperseg": [1, 4, 7], "14": 1, "label": [1, 4], "so": 1, "output": [1, 4, 7], "log10": [1, 7], "ab": [1, 7, 8], "freqz": 1, "l": [1, 4, 7], "set_xlim": 1, "20000": [1, 4, 7], "unwrap": [1, 7], "angl": [1, 7, 8], "legend": 1, "0x7f448b272ee0": 1, "preserv": [1, 4, 7], "dure": [1, 4, 5, 7], "illustr": 1, "pascal": [1, 4], "v": [1, 7], "pressur": [1, 4, 7], "linearli": 1, "depend": [1, 4], "bandpass": [1, 7], "3000": 1, "pa": [1, 4, 7], "v_fft": 1, "p_fft": 1, "set_ylim": 1, "50": [1, 4], "comput": [1, 4, 5, 7], "tf": 1, "0x7f448b3b8cd0": 1, "provid": [1, 5, 7], "spectra": [1, 7], "45": 1, "f71d479f840d": 1, "document": [1, 4, 5], "python": 1, "1156": 1, "1157": 1, "1158": 1, "1159": 1, "1160": 1, "1136": 1, "1137": 1, "1138": 1, "obk": 1, "ject": 1, "1139": 1, "1140": 1, "howev": 1, "even": 1, "questionn": 1, "prod": 1, "green": 1, "our": 1, "lti": 1, "transform": [1, 4, 7], "whose": 1, "ha": [1, 4, 7], "alreadi": [1, 5], "been": 1, "previous": 1, "appear": 1, "g": [1, 4], "see": [2, 4, 7], "readm": [2, 6], "md": 2, "contact": 4, "olivi": 4, "doar": 4, "ensta": 4, "pari": 4, "fr": 4, "set": [4, 7], "class": [4, 5, 7], "analysi": 4, "mainli": 4, "acoust": 4, "vibrat": 4, "orient": 4, "few": 4, "calibr": [4, 6, 7], "unit": [4, 6, 7], "spectral": [4, 6, 7, 8], "ot": 4, "weight": [4, 6, 7, 8], "hold": [4, 7], "list": [4, 5, 7], "smooth": [4, 6, 7, 8], "interpol": [4, 7], "implement": [4, 7], "via": 4, "sounddevic": 4, "ni": [4, 6, 8], "nidaqmx": 4, "select": 4, "target": 4, "soundcard": 4, "audio_run_measur": [4, 6, 7, 8], "ni_run_measur": [4, 6, 7, 8], "theses": 4, "audio_get_devic": [4, 6, 7, 8], "ni_get_devic": [4, 6, 7, 8], "present": [4, 5], "improv": 4, "fix": 4, "new": [4, 5, 7], "e": [4, 5], "hilbert": [4, 7, 8], "fir": 4, "out": [4, 7], "synchron": [4, 7], "peak": [4, 7], "sync": 4, "test": 4, "script": 4, "gui": 4, "experi": 4, "record": 4, "acceler": 4, "while": 4, "send": 4, "typic": 4, "20hz": 4, "20khz": 4, "sent": [4, 7], "2": [4, 6, 7], "44100hz": 4, "1v": 4, "gain": 4, "5v": 4, "refer": [4, 5, 7], "0db": 4, "0dbf": 4, "my": 4, "setup": 4, "run": [4, 5, 7], "m1": 4, "out_sig": [4, 7], "out_map": [4, 7], "out_nam": 4, "out1": 4, "out_desc": 4, "out_sig_freq": [4, 7], "in_map": [4, 7], "in_nam": [4, 7], "press": 4, "acc": 4, "in_desc": [4, 7], "point": 4, "b": [4, 5], "in_cal": [4, 7], "in_unit": [4, 7], "in_dbf": [4, 7], "out_dbf": [4, 7], "in_devic": [4, 7], "out_devic": [4, 7], "show": [4, 7, 8], "pickl": [4, 7], "file": [4, 5, 6, 7], "to_pickl": [4, 7, 8], "mck": 4, "m2": 4, "from_pickl": [4, 7, 8], "cv": 4, "wave": [4, 7], "json": [4, 7], "csvwav": 4, "jsonwav": 4, "tfe": [4, 7, 8], "dict": [4, 7], "sig": 4, "logsweep": [4, 7], "farina": [4, 7], "helper": [4, 7], "uniqu": 4, "individu": 4, "kei": [4, 7], "being": [4, 5], "figur": 4, "draw": 4, "correct": 4, "put": 4, "later": [4, 5], "One": 4, "mai": [4, 5], "densiti": [4, 7], "12": 4, "overlap": 4, "presspsd": 4, "psd": [4, 7, 8], "own": 4, "you": [4, 5], "tfap": 4, "impuls": [4, 7], "gap": 4, "remov": 4, "filterout": [4, 7, 8], "someth": 4, "like": 4, "pair": [4, 7], "metadata": 4, "inform": [4, 5], "reload": 4, "press_sig": 4, "version": [5, 7], "3": [5, 6, 7], "29": 5, "june": 5, "2007": 5, "copyright": [5, 6], "c": 5, "free": 5, "softwar": 5, "foundat": 5, "inc": 5, "http": 5, "fsf": 5, "org": 5, "everyon": 5, "permit": 5, "distribut": 5, "verbatim": 5, "incorpor": 5, "term": 5, "condit": 5, "supplement": 5, "permiss": 5, "definit": 5, "herein": 5, "gpl": 5, "librari": 5, "cover": 5, "govern": 5, "than": 5, "applic": 5, "defin": [5, 7], "interfac": 5, "otherwis": [5, 7], "subclass": 5, "deem": 5, "mode": 5, "link": 5, "particular": 5, "made": 5, "minim": 5, "sourc": 5, "mean": [5, 7], "exclud": 5, "code": 5, "portion": 5, "isol": 5, "includ": [5, 7], "util": 5, "program": 5, "need": [5, 7], "reproduc": 5, "section": 5, "convei": 5, "under": 5, "4": [5, 6, 7], "without": 5, "bound": 5, "your": 5, "modif": 5, "facil": 5, "suppli": 5, "pass": [5, 7], "invok": 5, "good": 5, "faith": 5, "effort": 5, "ensur": 5, "event": 5, "doe": [5, 7], "still": 5, "whatev": 5, "part": [5, 7], "purpos": 5, "remain": 5, "meaning": 5, "materi": 5, "header": 5, "form": 5, "choic": 5, "limit": [5, 7], "structur": 5, "layout": 5, "accessor": 5, "small": 5, "macro": 5, "inlin": 5, "templat": 5, "ten": 5, "fewer": 5, "both": [5, 7], "promin": 5, "notic": 5, "each": 5, "accompani": 5, "taken": [5, 7], "effect": 5, "restrict": 5, "revers": 5, "engin": 5, "debug": 5, "displai": 5, "execut": 5, "among": 5, "well": 5, "direct": 5, "user": 5, "suitabl": 5, "recombin": 5, "relink": 5, "manner": 5, "6": [5, 7], "share": 5, "mechan": 5, "properli": 5, "instal": 5, "requir": 5, "extent": 5, "option": [5, 7], "4d0": 5, "must": 5, "4d1": 5, "place": 5, "side": [5, 7], "singl": 5, "uncombin": 5, "explain": 5, "find": 5, "revis": 5, "publish": 5, "Such": 5, "spirit": 5, "detail": 5, "address": 5, "problem": 5, "concern": 5, "distinguish": 5, "receiv": 5, "certain": 5, "appli": [5, 7], "either": 5, "choos": 5, "ever": 5, "proxi": 5, "decid": 5, "whether": 5, "futur": 5, "shall": 5, "statement": 5, "accept": 5, "perman": 5, "author": 5, "todo": 6, "usag": 6, "tutori": 6, "o": 6, "submodul": [6, 8], "index": 6, "search": 6, "page": 6, "create_tim": [6, 7, 8], "nth_octave_band": [6, 7, 8], "picv": [6, 7, 8], "plot_tf": [6, 7, 8], "tfe_farina": [6, 7, 8], "param": 7, "map": 7, "str": 7, "unitari": 7, "short": 7, "dictionnari": 7, "extrat": 7, "tupl": 7, "realli": 7, "yet": 7, "extra": 7, "after": 7, "out_amp": 7, "minimum": 7, "maximum": 7, "fade": [7, 8], "begin": 7, "end": 7, "io_sync": 7, "device_typ": 7, "defic": [], "eventu": 7, "reacual": [], "create_output": [7, 8], "noth": 7, "filebas": 7, "channel": 7, "32": 7, "bit": 7, "from_jsonwav": [7, 8], "filenam": 7, "ytype": 7, "pretti": 7, "65536": 7, "noverlap": 7, "ploth": 7, "fals": 7, "x": [7, 8], "y": [7, 8], "retrun": 7, "tfe_xi": [7, 8], "kwarg": 7, "deprec": 7, "transfert": 7, "repres": 7, "tfeb": [7, 8], "2d": 7, "to_csvtxt": [7, 8], "includetim": 7, "datatyp": 7, "txt": 7, "readabl": 7, "textfil": 7, "to_jsonwav": [7, 8], "correpond": 7, "x_raw": [7, 8], "x_volt": [7, 8], "y_raw": [7, 8], "y_volt": [7, 8], "pint": 7, "seri": 7, "absolut": 7, "add_sil": [7, 8], "zero": 7, "origin": 7, "coh": [7, 8], "coher": 7, "corr": [7, 8], "cross": 7, "correl": 7, "cut": [7, 8], "posit": 7, "po": 7, "start": 7, "stop": 7, "volag": 7, "unyt_quant": 7, "db_spl": [7, 8], "pref": 7, "air": 7, "20e": 7, "db_svl": [7, 8], "vref": 7, "particl": 7, "5e": 7, "norm": 7, "backward": 7, "from_csvwav_old": [7, 8], "harmonic_disto": [7, 8], "nh": 7, "delai": 7, "harmon": 7, "distors": 7, "propos": 7, "sweep": 7, "log_sweep": [7, 8], "pf": 7, "linear": 7, "group": 7, "freauenci": 7, "dictionari": 7, "frequencyu": 7, "warn": 7, "imaginari": 7, "hilbert_ana": [7, 8], "analyt": 7, "through": 7, "exactli": 7, "rp": 7, "r": 7, "band": 7, "infinit": 7, "accordingli": 7, "cutoff": 7, "low": 7, "highpass": 7, "hp": 7, "lp": 7, "dilter": 7, "ellipt": 7, "amp": 7, "line2d": 7, "rate": 7, "desir": 7, "rm": [7, 8], "complet": 7, "rms_smooth": [7, 8], "512": 7, "over": 7, "window": 7, "width": 7, "size": 7, "specififi": 7, "account": 7, "similar2": [7, 8], "old": 7, "csd": 7, "timelag": [7, 8], "bool": 7, "column": 7, "to_csvwav_old": [7, 8], "equival": 7, "evenli": 7, "space": 7, "usuali": 7, "tranfert": 7, "construct": 7, "pectral": 7, "normal": [7, 8], "ortho": 7, "doc": 7, "initialis": 7, "apply_dba": [7, 8], "apply_dbc": [7, 8], "apply_weight": [7, 8], "invers": 7, "dbv": [7, 8], "dbu": [7, 8], "freqsrang": 7, "cancel": 7, "group_delai": [7, 8], "ifft": [7, 8], "nth_oct_smooth": [7, 8], "fmin": 7, "fmax": 7, "nth": 7, "octav": 7, "nth_oct_smooth_complex": [7, 8], "ratio": 7, "min": [7, 8], "max": [7, 8], "nth_oct_smooth_to_weight": [7, 8], "nth_oct_smooth_to_weight_complex": [7, 8], "logx": 7, "dby": 7, "plot_phas": 7, "unwrap_phas": 7, "axi": 7, "plotphas": 7, "weigth": 7, "radian": 7, "acomplex": [7, 8], "adb": [7, 8], "from_csv": [7, 8], "asdb": 7, "asradian": 7, "to_csv": [7, 8], "rang": 7, "long": 7, "middl": 7, "in_arrai": 7, "4096": [], "nfft": 7, "detrend": 7, "pad_to": 7, "scale_by_freq": 7, "progress": 7, "pico": 7, "reactual": 7, "rad": 7, "as_raw": [7, 8], "as_volt": [7, 8], "diff": [7, 8], "deriv": 7, "imag": [7, 8], "sine": [7, 8], "spectrogram": [7, 8], "logi": 7, "dbvalu": 7, "callback": [6, 7, 8], "n_to_ain": [6, 7, 8], "n_to_aon": [6, 7, 8], "task_handl": 7, "every_n_samples_event_typ": 7, "number_of_sampl": 7, "callback_data": 7}, "objects": {"": [[7, 0, 0, "-", "measpy"]], "measpy": [[7, 0, 0, "-", "audio"], [7, 0, 0, "-", "measurement"], [7, 0, 0, "-", "ni"], [7, 0, 0, "-", "signal"]], "measpy.audio": [[7, 1, 1, "", "audio_get_devices"], [7, 1, 1, "", "audio_run_measurement"]], "measpy.measurement": [[7, 2, 1, "", "Measurement"]], "measpy.measurement.Measurement": [[7, 3, 1, "", "create_output"], [7, 3, 1, "", "from_csvwav"], [7, 3, 1, "", "from_jsonwav"], [7, 3, 1, "", "from_pickle"], [7, 3, 1, "", "plot"], [7, 3, 1, "", "show"], [7, 4, 1, "", "t"], [7, 3, 1, "", "tfe"], [7, 3, 1, "", "tfe_xy"], [7, 3, 1, "", "tfeb"], [7, 3, 1, "", "to_csvtxt"], [7, 3, 1, "", "to_csvwav"], [7, 3, 1, "", "to_jsonwav"], [7, 3, 1, "", "to_pickle"], [7, 4, 1, "", "x"], [7, 4, 1, "", "x_raw"], [7, 4, 1, "", "x_volts"], [7, 4, 1, "", "y"], [7, 4, 1, "", "y_raw"], [7, 4, 1, "", "y_volts"]], "measpy.ni": [[7, 1, 1, "", "callback"], [7, 1, 1, "", "n_to_ain"], [7, 1, 1, "", "n_to_aon"], [7, 1, 1, "", "ni_get_devices"], [7, 1, 1, "", "ni_run_measurement"]], "measpy.signal": [[7, 2, 1, "", "Signal"], [7, 2, 1, "", "Spectral"], [7, 2, 1, "", "Weighting"], [7, 1, 1, "", "create_time"], [7, 1, 1, "", "nth_octave_bands"], [7, 1, 1, "", "picv"], [7, 1, 1, "", "plot_tfe"], [7, 1, 1, "", "smooth"], [7, 1, 1, "", "tfe_farina"], [7, 1, 1, "", "tfe_welch"]], "measpy.signal.Signal": [[7, 3, 1, "", "abs"], [7, 3, 1, "", "add_silence"], [7, 3, 1, "", "angle"], [7, 3, 1, "", "as_raw"], [7, 3, 1, "", "as_volts"], [7, 3, 1, "", "coh"], [7, 3, 1, "", "corr"], [7, 3, 1, "", "cut"], [7, 3, 1, "", "dB"], [7, 3, 1, "", "dB_SPL"], [7, 3, 1, "", "dB_SVL"], [7, 3, 1, "", "diff"], [7, 4, 1, "", "dur"], [7, 3, 1, "", "fade"], [7, 3, 1, "", "fft"], [7, 3, 1, "", "from_csvwav"], [7, 3, 1, "", "from_csvwav_old"], [7, 3, 1, "", "from_wav"], [7, 3, 1, "", "harmonic_disto"], [7, 3, 1, "", "hilbert"], [7, 3, 1, "", "hilbert_ana"], [7, 3, 1, "", "iir"], [7, 3, 1, "", "imag"], [7, 4, 1, "", "length"], [7, 3, 1, "", "log_sweep"], [7, 3, 1, "", "max"], [7, 3, 1, "", "min"], [7, 3, 1, "", "noise"], [7, 3, 1, "", "normalize"], [7, 3, 1, "", "plot"], [7, 3, 1, "", "psd"], [7, 4, 1, "", "raw"], [7, 3, 1, "", "real"], [7, 3, 1, "", "resample"], [7, 3, 1, "", "rfft"], [7, 3, 1, "", "rms"], [7, 3, 1, "", "rms_smooth"], [7, 3, 1, "", "similar"], [7, 3, 1, "", "similar2"], [7, 3, 1, "", "sine"], [7, 3, 1, "", "spectrogram"], [7, 3, 1, "", "tfe_farina"], [7, 3, 1, "", "tfe_welch"], [7, 4, 1, "", "time"], [7, 3, 1, "", "timelag"], [7, 3, 1, "", "to_csvtxt"], [7, 3, 1, "", "to_csvwav"], [7, 3, 1, "", "to_csvwav_old"], [7, 3, 1, "", "unit_to"], [7, 3, 1, "", "unit_to_std"], [7, 4, 1, "", "values"], [7, 4, 1, "", "volts"]], "measpy.signal.Spectral": [[7, 3, 1, "", "angle"], [7, 3, 1, "", "apply_dBA"], [7, 3, 1, "", "apply_dBC"], [7, 3, 1, "", "apply_weighting"], [7, 3, 1, "", "dBV"], [7, 3, 1, "", "dB_SPL"], [7, 3, 1, "", "dB_SVL"], [7, 3, 1, "", "dBu"], [7, 3, 1, "", "diff"], [7, 4, 1, "", "dur"], [7, 3, 1, "", "filterout"], [7, 4, 1, "", "freqs"], [7, 3, 1, "", "group_delay"], [7, 3, 1, "", "ifft"], [7, 3, 1, "", "imag"], [7, 3, 1, "", "irfft"], [7, 4, 1, "", "length"], [7, 3, 1, "", "nth_oct_smooth"], [7, 3, 1, "", "nth_oct_smooth_complex"], [7, 3, 1, "", "nth_oct_smooth_to_weight"], [7, 3, 1, "", "nth_oct_smooth_to_weight_complex"], [7, 3, 1, "", "plot"], [7, 3, 1, "", "real"], [7, 3, 1, "", "similar"], [7, 3, 1, "", "tfe"], [7, 3, 1, "", "unit_to"], [7, 4, 1, "", "values"]], "measpy.signal.Weighting": [[7, 4, 1, "", "acomplex"], [7, 4, 1, "", "adb"], [7, 3, 1, "", "from_csv"], [7, 3, 1, "", "to_csv"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method", "4": "py:property"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"], "4": ["py", "property", "Python property"]}, "titleterms": {"tutori": [0, 1, 2, 3], "1": 0, "plai": 0, "measpi": [0, 1, 2, 3, 4, 6, 7, 8], "signal": [0, 7], "class": [0, 1, 2, 3], "basic": 0, "2": [0, 1], "unit": [0, 1], "3": [0, 2], "calibr": 0, "4": [0, 3], "file": 0, "i": 0, "o": 0, "spectral": 1, "The": [2, 3], "measur": [2, 4, 7], "weight": 3, "python": 4, "todo": 4, "usag": 4, "exampl": 4, "gnu": 5, "lesser": 5, "gener": 5, "public": 5, "licens": 5, "welcom": 6, "": 6, "document": 6, "content": [6, 7], "indic": 6, "tabl": 6, "packag": 7, "submodul": 7, "audio": 7, "modul": 7, "ni": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Tutorial 1: Play with the measpy.Signal class": [[0, "tutorial-1-play-with-the-measpy-signal-class"]], "1. Basics": [[0, "basics"]], "2. Units": [[0, "units"]], "3. Calibrations": [[0, "calibrations"]], "4. File I/O": [[0, "file-i-o"]], "Tutorial 2: measpy.Spectral class": [[1, "tutorial-2-measpy-spectral-class"]], "Units": [[1, "units"]], "Tutorial 3: The measpy.Measurement class": [[2, "tutorial-3-the-measpy-measurement-class"]], "Tutorial 4: The measpy.Weighting class": [[3, "tutorial-4-the-measpy-weighting-class"]], "measpy - Measurements with Python": [[4, "measpy-measurements-with-python"]], "TODO": [[4, "todo"]], "Usage example": [[4, "usage-example"]], "GNU LESSER GENERAL PUBLIC LICENSE": [[5, "gnu-lesser-general-public-license"]], "Welcome to measpy\u2019s documentation!": [[6, "welcome-to-measpy-s-documentation"]], "Contents:": [[6, null]], "Indices and tables": [[6, "indices-and-tables"]], "measpy": [[8, "measpy"]], "measpy package": [[7, "measpy-package"]], "Submodules": [[7, "submodules"]], "measpy.audio module": [[7, "module-measpy.audio"]], "measpy.measurement module": [[7, "module-measpy.measurement"]], "measpy.ni module": [[7, "module-measpy.ni"]], "measpy.signal module": [[7, "module-measpy.signal"]], "Module contents": [[7, "module-measpy"]]}, "indexentries": {"measurement (class in measpy.measurement)": [[7, "measpy.measurement.Measurement"]], "signal (class in measpy.signal)": [[7, "measpy.signal.Signal"]], "spectral (class in measpy.signal)": [[7, "measpy.signal.Spectral"]], "weighting (class in measpy.signal)": [[7, "measpy.signal.Weighting"]], "abs() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.abs"]], "acomplex (measpy.signal.weighting property)": [[7, "measpy.signal.Weighting.acomplex"]], "adb (measpy.signal.weighting property)": [[7, "measpy.signal.Weighting.adb"]], "add_silence() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.add_silence"]], "angle() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.angle"]], "angle() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.angle"]], "apply_dba() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.apply_dBA"]], "apply_dbc() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.apply_dBC"]], "apply_weighting() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.apply_weighting"]], "as_raw() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.as_raw"]], "as_volts() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.as_volts"]], "audio_get_devices() (in module measpy.audio)": [[7, "measpy.audio.audio_get_devices"]], "audio_run_measurement() (in module measpy.audio)": [[7, "measpy.audio.audio_run_measurement"]], "callback() (in module measpy.ni)": [[7, "measpy.ni.callback"]], "coh() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.coh"]], "corr() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.corr"]], "create_output() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.create_output"]], "create_time() (in module measpy.signal)": [[7, "measpy.signal.create_time"]], "cut() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.cut"]], "db() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.dB"]], "dbv() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.dBV"]], "db_spl() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.dB_SPL"]], "db_spl() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.dB_SPL"]], "db_svl() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.dB_SVL"]], "db_svl() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.dB_SVL"]], "dbu() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.dBu"]], "diff() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.diff"]], "diff() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.diff"]], "dur (measpy.signal.signal property)": [[7, "measpy.signal.Signal.dur"]], "dur (measpy.signal.spectral property)": [[7, "measpy.signal.Spectral.dur"]], "fade() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.fade"]], "fft() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.fft"]], "filterout() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.filterout"]], "freqs (measpy.signal.spectral property)": [[7, "measpy.signal.Spectral.freqs"]], "from_csv() (measpy.signal.weighting class method)": [[7, "measpy.signal.Weighting.from_csv"]], "from_csvwav() (measpy.measurement.measurement class method)": [[7, "measpy.measurement.Measurement.from_csvwav"]], "from_csvwav() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.from_csvwav"]], "from_csvwav_old() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.from_csvwav_old"]], "from_jsonwav() (measpy.measurement.measurement class method)": [[7, "measpy.measurement.Measurement.from_jsonwav"]], "from_pickle() (measpy.measurement.measurement class method)": [[7, "measpy.measurement.Measurement.from_pickle"]], "from_wav() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.from_wav"]], "group_delay() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.group_delay"]], "harmonic_disto() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.harmonic_disto"]], "hilbert() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.hilbert"]], "hilbert_ana() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.hilbert_ana"]], "ifft() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.ifft"]], "iir() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.iir"]], "imag() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.imag"]], "imag() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.imag"]], "irfft() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.irfft"]], "length (measpy.signal.signal property)": [[7, "measpy.signal.Signal.length"]], "length (measpy.signal.spectral property)": [[7, "measpy.signal.Spectral.length"]], "log_sweep() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.log_sweep"]], "max() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.max"]], "measpy": [[7, "module-measpy"]], "measpy.audio": [[7, "module-measpy.audio"]], "measpy.measurement": [[7, "module-measpy.measurement"]], "measpy.ni": [[7, "module-measpy.ni"]], "measpy.signal": [[7, "module-measpy.signal"]], "min() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.min"]], "module": [[7, "module-measpy"], [7, "module-measpy.audio"], [7, "module-measpy.measurement"], [7, "module-measpy.ni"], [7, "module-measpy.signal"]], "n_to_ain() (in module measpy.ni)": [[7, "measpy.ni.n_to_ain"]], "n_to_aon() (in module measpy.ni)": [[7, "measpy.ni.n_to_aon"]], "ni_get_devices() (in module measpy.ni)": [[7, "measpy.ni.ni_get_devices"]], "ni_run_measurement() (in module measpy.ni)": [[7, "measpy.ni.ni_run_measurement"]], "noise() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.noise"]], "normalize() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.normalize"]], "nth_oct_smooth() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.nth_oct_smooth"]], "nth_oct_smooth_complex() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.nth_oct_smooth_complex"]], "nth_oct_smooth_to_weight() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.nth_oct_smooth_to_weight"]], "nth_oct_smooth_to_weight_complex() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.nth_oct_smooth_to_weight_complex"]], "nth_octave_bands() (in module measpy.signal)": [[7, "measpy.signal.nth_octave_bands"]], "picv() (in module measpy.signal)": [[7, "measpy.signal.picv"]], "plot() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.plot"]], "plot() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.plot"]], "plot() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.plot"]], "plot_tfe() (in module measpy.signal)": [[7, "measpy.signal.plot_tfe"]], "psd() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.psd"]], "raw (measpy.signal.signal property)": [[7, "measpy.signal.Signal.raw"]], "real() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.real"]], "real() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.real"]], "resample() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.resample"]], "rfft() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.rfft"]], "rms() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.rms"]], "rms_smooth() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.rms_smooth"]], "show() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.show"]], "similar() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.similar"]], "similar() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.similar"]], "similar2() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.similar2"]], "sine() (measpy.signal.signal class method)": [[7, "measpy.signal.Signal.sine"]], "smooth() (in module measpy.signal)": [[7, "measpy.signal.smooth"]], "spectrogram() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.spectrogram"]], "t (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.t"]], "tfe() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.tfe"]], "tfe() (measpy.signal.spectral class method)": [[7, "measpy.signal.Spectral.tfe"]], "tfe_farina() (in module measpy.signal)": [[7, "measpy.signal.tfe_farina"]], "tfe_farina() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.tfe_farina"]], "tfe_welch() (in module measpy.signal)": [[7, "measpy.signal.tfe_welch"]], "tfe_welch() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.tfe_welch"]], "tfe_xy() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.tfe_xy"]], "tfeb() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.tfeb"]], "time (measpy.signal.signal property)": [[7, "measpy.signal.Signal.time"]], "timelag() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.timelag"]], "to_csv() (measpy.signal.weighting method)": [[7, "measpy.signal.Weighting.to_csv"]], "to_csvtxt() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.to_csvtxt"]], "to_csvtxt() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.to_csvtxt"]], "to_csvwav() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.to_csvwav"]], "to_csvwav() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.to_csvwav"]], "to_csvwav_old() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.to_csvwav_old"]], "to_jsonwav() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.to_jsonwav"]], "to_pickle() (measpy.measurement.measurement method)": [[7, "measpy.measurement.Measurement.to_pickle"]], "unit_to() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.unit_to"]], "unit_to() (measpy.signal.spectral method)": [[7, "measpy.signal.Spectral.unit_to"]], "unit_to_std() (measpy.signal.signal method)": [[7, "measpy.signal.Signal.unit_to_std"]], "values (measpy.signal.signal property)": [[7, "measpy.signal.Signal.values"]], "values (measpy.signal.spectral property)": [[7, "measpy.signal.Spectral.values"]], "volts (measpy.signal.signal property)": [[7, "measpy.signal.Signal.volts"]], "x (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.x"]], "x_raw (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.x_raw"]], "x_volts (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.x_volts"]], "y (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.y"]], "y_raw (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.y_raw"]], "y_volts (measpy.measurement.measurement property)": [[7, "measpy.measurement.Measurement.y_volts"]]}})