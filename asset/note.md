<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Saya</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- CSS Back Button -->
 <link rel="stylesheet" href="back-button.css">
</head>
<body>

    <!-- ===== BACK BUTTON ===== -->
    <div class="top">
        <button class="back-btn" onclick="handleBackClick()" aria-label="Kembali">
            <i class="fas fa-arrow-left"></i>
        </button>
    </div>

    <!-- ===== KONTEN HALAMAN ===== -->
    <div class="container" style="padding: 20px; font-family: 'Plus Jakarta Sans', sans-serif;">
        <h1>Halaman Contoh</h1>
        <p>Klik tombol panah kiri untuk kembali</p>
    </div>

    <!-- ===== TOAST ===== -->
    <div class="toast" id="toast"></div>

    <!-- ===== JAVASCRIPT ===== -->
    <script>
        /* Copy JavaScript dari bagian 3 di sini */
    </script>

</body>
</html>



--------------------------navbar dibwh

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artemis - Tour Guide</title>

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Navbar CSS -->
    <link rel="stylesheet" href="../asset/navbar.css">
</head>
<body>

    <!-- ==========================================
         NAVBAR COMPONENT - Tempat pemanggilan
         ========================================== -->
    <div id="navbar-container" data-component="../asset/navbar.html"></div>

    <!-- ==========================================
         KONTEN HALAMAN
         ========================================== -->
    <div class="container mt-5">
        <h1>Tour Guide Page</h1>
        <p>Konten halaman tour guide di sini...</p>
    </div>

    <!-- ==========================================
         FOOTER / SKRIP
         ========================================== -->
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Component Loader -->
    <script src="../asset/navbar.js"></script>
</body>
</html>