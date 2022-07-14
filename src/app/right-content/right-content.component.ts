import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.css']
})
export class RightContentComponent implements OnInit {
  productDetails = [
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/21bbquqr0dL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 15.99 ,
      actualPrice: 64.99 ,
      content: "UV Sun Protection Compression Arm Sleeves,Cooling Athletic Sports Sleeve"
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51JCYp53LZL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 70 ,
      price: 19.99 ,
      actualPrice: 64.99 ,
      content: "Waterproof Phone Pouch - Universal Waterproof Phone Case Compatible for.."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41eOKstFFUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 50 ,
      price: 15.99 ,
      actualPrice: 26.99 ,
      content: "Jeacitory 12x50 Binoculars with Clear Low Night Version for Adults and Kids "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41t+DKqfTNL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 90 ,
      price: 155.99 ,
      actualPrice: 634.99 ,
      content: "JiaSiFu Portable Selfie Stick, Handheld Tripod with Detachable Wireless Remote "
    },
    {
      productImage:'https://m.media-amazon.com/images/I/51ajoW1-baL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 1.99 ,
      actualPrice: 5.99 ,
      content: "Digital Meat Thermometer with Probe, Instant Read Food Thermometer for ..."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41-C4-ep23L._AC_UF226,226_FMjpg_.jpg',
      discountOff: 75 ,
      price: 515.99 ,
      actualPrice: 624.99 ,
      content: "Massage Gun,Quiet Brushless Deep Tissue Percussion Muscle Massager Gun for .."
    },
    {
      productImage:'https://m.media-amazon.com/images/I/41xRr6CrLUL._AC_UF226,226_FMjpg_.jpg',
      discountOff: 60 ,
      price: 115.99 ,
      actualPrice: 164.99 ,
      content: "Flash Furniture Capri Comfortable Sleep 10 Inch CertiPUR-US Certified ..."
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
