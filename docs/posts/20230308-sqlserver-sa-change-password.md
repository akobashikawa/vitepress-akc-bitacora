---
title: "Cómo cambiar el password a sa de SQLServer en Windows"
tags: ["windows", "sqlserver", "troubleshooting"]
date: 2023-03-08
---

# 20230308: Cómo cambiar el password a sa

<TagsLinks />

- Por alguna razón, no recuerdo el password del usuario sa
- Abro **powershell como admin**

```powershell
	Osql -S RSNP-LPT-35\SQL2019 -E
	1> EXEC sp_password NULL, 'secret123', 'sa'
	2> GO
```

- Accedo como sa
- Como paso adicional, puedo entrar a *Security*, *Logins* y agregar `<MYHOST>\<MYUSER>`
	- Accedo como `<MYUSER>`