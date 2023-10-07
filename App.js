import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation';
export default function App() {
  
  return (
    <AppNavigation />
  )
}

// import math

// import torch
// from torch import nn
// from torch.nn import functional as F

// import modules.commons as commons
// from modules.DSConv import weight_norm_modules
// from modules.modules import LayerNorm


// class FFT(nn.Module):
//   def __init__(self, hidden_channels, filter_channels, n_heads, n_layers=1, kernel_size=1, p_dropout=0.,
//                proximal_bias=False, proximal_init=True, isflow = False, **kwargs):
//     super().__init__()
//     self.hidden_channels = hidden_channels
//     self.filter_channels = filter_channels
//     self.n_heads = n_heads
//     self.n_layers = n_layers
//     self.kernel_size = kernel_size
//     self.p_dropout = p_dropout
//     self.proximal_bias = proximal_bias
//     self.proximal_init = proximal_init
//     if isflow:
//       cond_layer = torch.nn.Conv1d(kwargs["gin_channels"], 2*hidden_channels*n_layers, 1)
//       self.cond_pre = torch.nn.Conv1d(hidden_channels, 2*hidden_channels, 1)
//       self.cond_layer = weight_norm_modules(cond_layer, name='weight')
//       self.gin_channels = kwargs["gin_channels"]
//     self.drop = nn.Dropout(p_dropout)
//     self.self_attn_layers = nn.ModuleList()
//     self.norm_layers_0 = nn.ModuleList()
//     self.ffn_layers = nn.ModuleList()
//     self.norm_layers_1 = nn.ModuleList()
//     for i in range(self.n_layers):
//       self.self_attn_layers.append(
//         MultiHeadAttention(hidden_channels, hidden_channels, n_heads, p_dropout=p_dropout, proximal_bias=proximal_bias,
//                            proximal_init=proximal_init))
//       self.norm_layers_0.append(LayerNorm(hidden_channels))
//       self.ffn_layers.append(
//         FFN(hidden_channels, hidden_channels, filter_channels, kernel_size, p_dropout=p_dropout, causal=True))
//       self.norm_layers_1.append(LayerNorm(hidden_channels))