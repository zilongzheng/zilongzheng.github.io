import os
from PIL import Image
import sys


if __name__ == '__main__':
    filename = sys.argv[1]

    target_w = 170
    if len(sys.argv) > 2:
        target_w = int(sys.argv[2])

    if os.path.exists(filename):
        img = Image.open(filename)
        w, h = img.size
        if w > target_w:
            target_h = round(float(h) / w * target_w)
            img = img.resize((target_w, target_h))
            img.save(filename)

