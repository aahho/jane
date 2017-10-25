import sys, os

def create(file_path, data):
    f = open(file_path, "w")
    f.write(data)
    f.close()
    return f

def open_file(file_path, mode='r'):
    return open(file_path, mode)

def read(file_path):
    f = open(file_path, "r")
    data = f.read()
    f.close()
    return data

def edit(file_path, data):
    pass

def append(file_path, data):
    f = open(file_path, "a")
    f.write(data)
    f.close()
    return f

def prepend(file_path, data):
    pass

def delete(file_path):
    pass

def list_all_files(dir_path, only_files=False, extension=None, with_path=False):
    """
    Return all the files and directories in a given folder.
    Can filter on that directory
    """
    dir_path = dir_path.rstrip('/')

    if extension is not None:
        if only_files:
            if with_path:
                return [dir_path + "/" + f for f in os.listdir(dir_path) if os.path.isfile(dir_path + '/' + f) and f.endswith("." + extension) ]
            return [f for f in os.listdir(dir_path) if os.path.isfile(dir_path + "/" + f) and f.endswith("." + extension) ]
        if with_path:
            return [dir_path + "/" + x for x in os.listdir(dir_path) if x.endswith("." + extension)]
        return [x for x in os.listdir(dir_path) if x.endswith("." + extension)]

    if only_files:
        if with_path:
            return [dir_path + "/" + f for f in os.listdir(dir_path) if os.path.isfile(dir_path + "/" + f)]
        return [f for f in os.listdir(dir_path) if os.path.isfile(dir_path + "/" + f)]
    return os.listdir(dir_path)

def is_dir(path):
    """
    Check if the given path is a file
    """
    return os.path.isfile(path)

