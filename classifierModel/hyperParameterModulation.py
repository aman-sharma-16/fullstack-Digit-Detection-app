import json, numpy as np

file_path = "classifierModel/hyperParams.json"

with open(file_path, "r") as json_file_read:
    hyper_parameters = json.load(json_file_read)


def convert_to_np_array(input_data) -> np.ndarray:
    return np.array(input_data)


hyper_parameters = {
    "w1": convert_to_np_array(hyper_parameters["Weights"]["w1"]),
    "w2": convert_to_np_array(hyper_parameters["Weights"]["w2"]),
    "b1": convert_to_np_array(hyper_parameters["Biases"]["b1"]),
    "b2": convert_to_np_array(hyper_parameters["Biases"]["b2"]),
}
