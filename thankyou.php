<?php
require_once __DIR__ . '/db.php';

$orderId = isset($_GET['order']) ? (int)$_GET['order'] : 0;
if ($orderId <= 0) {
  http_response_code(400);
  echo "Missing order id.";
  exit;
}

// Load order + customer
$stmt = $pdo->prepare("
  SELECT o.id, o.total_cents, o.currency, o.status, o.card_brand, o.card_last4, o.created_at,
         c.full_name, c.email, c.phone, c.city, c.province
  FROM orders o
  JOIN customers c ON c.id = o.customer_id
  WHERE o.id = ?
");
$stmt->execute([$orderId]);
$order = $stmt->fetch();

if (!$order) {
  http_response_code(404);
  echo "Order not found.";
  exit;
}

// Items
$itemsStmt = $pdo->prepare("SELECT name, unit_price_cents, quantity, subtotal_cents FROM order_items WHERE order_id = ?");
$itemsStmt->execute([$orderId]);
$items = $itemsStmt->fetchAll();

function cents_to_lkr($c){ return "Rs.".number_format(round($c/1), 0); } // your prices are in rupees; keep cents=1 rupee
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You — GamerX</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="pay-dark">
  <section id="header">
    <a href="index.html"><img src="img/logo.png" class="logo" alt="GamerX Logo"/></a>
    <div>
      <ul id="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </section>

  <main>
    <section id="hero2">
      <div class="pay-wrapper">
        <div class="panel">
          <h2>Payment Successful 🎉</h2>
          <p class="subtle">Order #<?php echo htmlspecialchars($order['id']); ?> •
            <?php echo date('Y-m-d H:i', strtotime($order['created_at'])); ?>
          </p>

          <div class="summary-card" style="margin-top:12px">
            <h3>Order summary</h3>
            <?php foreach ($items as $it): ?>
              <div class="pay-item">
                <span><?php echo htmlspecialchars($it['name']); ?> x <?php echo (int)$it['quantity']; ?></span>
                <span><?php echo cents_to_lkr($it['subtotal_cents']); ?></span>
              </div>
            <?php endforeach; ?>
            <div class="pay-total" style="margin-top:16px">
              <span>Total</span>
              <span><?php echo cents_to_lkr($order['total_cents']); ?></span>
            </div>
          </div>

          <div class="summary-card" style="margin-top:18px">
            <h3>Customer</h3>
            <p><?php echo htmlspecialchars($order['full_name']); ?> — <?php echo htmlspecialchars($order['email']); ?></p>
            <p><?php echo htmlspecialchars($order['city']); ?>, <?php echo htmlspecialchars($order['province']); ?></p>
            <p>Card: <?php echo htmlspecialchars($order['card_brand'] ?: 'card'); ?> •••• <?php echo htmlspecialchars($order['card_last4']); ?></p>
          </div>

          <a href="shop.html" class="btn" style="display:inline-block; margin-top:18px; text-decoration:none; text-align:center;">Continue Shopping</a>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
