# Función para generar el shell de un artículo de blog
# Uso: make_article <archivo> <title> <metadesc> <cat> <catslug> <h1> <tiempo> <fecha>
make_article_shell() {
  local FILE=$1 TITLE=$2 META=$3 CAT=$4 H1=$5 MINS=$6 FECHA=$7
  cat > "/home/claude/cambiofit/blog/$FILE" << SHELL
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${TITLE} | Cambio Fit</title>
<meta name="description" content="${META}">
<link rel="canonical" href="https://tusitio.github.io/cambiofit/blog/${FILE}">
<meta property="og:type" content="article">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${META}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/main.css">
</head>
<body>
<div id="site-header-placeholder"></div>
<main id="main">
SHELL
}
echo "función lista"