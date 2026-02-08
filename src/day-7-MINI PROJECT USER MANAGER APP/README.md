day-7:
1️⃣ FORM ADD USER
Input name
Input age
Button Add User

Validasi:
name kosong → tidak boleh submit
age kosong → tidak boleh submit
Setelah submit → form reset

2️⃣ LIST USER
Tampilkan:
Nama
Umur
Label Adult jika age ≥ 20

Conditional style:
Adult → hijau
Underage → abu-abu

3️⃣ DELETE USER
Tiap user punya tombol ❌
Klik → user langsung hilang

4️⃣ CLEAN CODE (PENTING)
Component terpisah:
UserForm
UserList
UserItem
Logic state di parent
Child component presentational

day-8:
TUGAS 1 — SEARCH USER
Tambah input search
User bisa cari berdasarkan name
Case insensitive

TUGAS 2 — FILTER LOGIC
Search kosong → tampilkan semua user
Search ada → tampilkan hasil filter

TUGAS 3 — EMPTY STATE
Jika hasil kosong → tampilkan:
“User not found”