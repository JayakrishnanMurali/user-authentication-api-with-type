export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDOqBlg4g+RI0TEizjylNCe1MAOc+gLSg9UKHcRKat/x9x6XskM
tmDWPyDqFqOihrL55XchZN+5jM/mSY7hZ4XaPolyXyrsieST2UoezRvTgOPwvCBx
VBYYQlhfbIkKqol1wHvglrksYZQPh1s2WvLq8b+ksMcnN6eFfPxlWbGQPwIDAQAB
AoGARFNHsMSNKQtkHSd6uJmDMEBfD2g6/CCMWOLYGxCP5zuJJdxY1J8n/S36D+tU
RtQKMJ0xehUD8zEfO6BuYQ/9LMcDqxTC1Jp5zoSpKVVhzB7U4kAaDrPu6JRU2u4y
tiGIXSyH/gfBH8JShB/PvsAAQCbLx7MsXib2uXCi0TT1usECQQDr6ptCRmy/JiXu
DexMnR/W3CzAhHZ9WX2HNoeji4rnsDdzk1DhpVROGxq6iuXHgmkIlPNcnPeiT4xa
WM9uuPSJAkEA4D/TX9XhUX87m0b+9cD86FpELxH/rtTXj9OLSNpJmY/1476EptzX
O2EPzfMRHE/xyIMJbmR8w73DdQH8kPS8hwJAQVbFz3I/1iUTpj327zUpR1HNlzhY
tNjfOl6w7GvOeeLFSN5JLWWj1soM+hNUFpCY1IakbEcREsQjZDZqpQjWuQJBAICx
wHHwgeXOefvMC8gn4DzMiPLmhnDkb214PygpNjHt33S7Qs+sT80hD/vmsfwomR60
rPXwr3V6czC0WikqewMCQFWYvAHRnefzKshU6vvFtSjAbuZ2EugCPkt3Y1fui3Jv
PIDVYcCZkqJBaXNsjMslCRgs3OSkGzMH5G36Z3fGbpQ=
-----END RSA PRIVATE KEY-----`,
};
