import math, os
from PIL import Image, ImageDraw

OUT = os.path.join(os.path.dirname(__file__), 'icons')
os.makedirs(OUT, exist_ok=True)
BG, MINT, INK = (17, 20, 24, 255), (156, 207, 190, 255), (15, 29, 25, 255)

def cookie(cx, cy, R, n=9, a=0.07, steps=720):
    pts = []
    for i in range(steps):
        t = 2 * math.pi * i / steps
        r = R * (1 + a * math.cos(n * (t + math.pi / 2)))
        pts.append((cx + r * math.cos(t), cy + r * math.sin(t)))
    return pts

def ell(cx, cy, rx, ry, ang=0.0, steps=240):
    pts = []
    for i in range(steps):
        t = 2 * math.pi * i / steps
        x, y = rx * math.cos(t), ry * math.sin(t)
        pts.append((cx + x * math.cos(ang) - y * math.sin(ang), cy + x * math.sin(ang) + y * math.cos(ang)))
    return pts

def ring(d, cx, cy, rx, ry, w, ink, fill, ang=0.0):
    d.polygon(ell(cx, cy, rx + w / 2, ry + w / 2, ang), fill=ink)
    d.polygon(ell(cx, cy, rx - w / 2, ry - w / 2, ang), fill=fill)

def fly(d, cx, cy, s, ink, fill, w):
    for sign in (-1, 1):
        ring(d, cx + sign * 0.25 * s, cy - 0.10 * s, 0.18 * s, 0.09 * s, w, ink, fill, math.radians(-26 * sign))
    ring(d, cx, cy + 0.09 * s, 0.12 * s, 0.21 * s, w, ink, fill)
    ring(d, cx, cy - 0.21 * s, 0.085 * s, 0.085 * s, w, ink, fill)

def make(size, scale, mono=False):
    S = size * 4
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0) if mono else BG)
    d = ImageDraw.Draw(img)
    R = S * scale / 2
    body = (255, 255, 255, 255) if mono else MINT
    d.polygon(cookie(S / 2, S / 2, R), fill=body)
    fly(d, S / 2, S / 2 + R * 0.04, R * 1.5, (0, 0, 0, 0) if mono else INK, body, R * 0.075)
    return img.resize((size, size), Image.LANCZOS)

make(192, 0.80).save(os.path.join(OUT, 'icon-192.png'))
make(512, 0.80).save(os.path.join(OUT, 'icon-512.png'))
make(512, 0.62).save(os.path.join(OUT, 'maskable-512.png'))
make(512, 0.80, mono=True).save(os.path.join(OUT, 'monochrome-512.png'))
print('icons ok')
