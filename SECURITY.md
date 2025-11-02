# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

We take the security of ArkT seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **Email**: [security@arkt.ink](mailto:security@arkt.ink)
2. **GitHub Security Advisories**: Use the [Security tab](https://github.com/Goduu/arkt.ink/security) in this repository

### What to Include

When reporting a vulnerability, please include:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact and severity assessment
- Any proof-of-concept code or screenshots (if applicable)
- Your suggested fix (if you have one)

### Our Commitment

We are committed to working with security researchers:

- ✅ **We will not pursue legal action** for good-faith research and vulnerability disclosure
- ✅ **We will acknowledge your report** within 48 hours
- ✅ **We will provide regular updates** on the status of the vulnerability
- ✅ **We will credit you** in our security acknowledgments (unless you prefer to remain anonymous)
- ✅ **We will fix critical issues** within 7 days

### Disclosure Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Critical Issues**: Fixed within 7 days
- **High Issues**: Fixed within 30 days
- **Medium/Low Issues**: Fixed in the next regular release cycle

### What We Look For

We are particularly interested in:

- Authentication and authorization bypasses
- Cross-site scripting (XSS) vulnerabilities
- Cross-site request forgery (CSRF) vulnerabilities
- Server-side request forgery (SSRF) vulnerabilities
- Local data storage vulnerabilities
- OAuth implementation flaws
- Encryption or cryptographic weaknesses
- Data exposure vulnerabilities
- Remote code execution (RCE) vulnerabilities

### What Not to Report

Please do not report:

- Denial of service (DoS) attacks that do not impact availability
- Issues requiring physical access to a user's device
- Issues in third-party services or dependencies (please report these directly to the respective maintainers)
- Social engineering attacks
- Issues that require user interaction and are not exploitable in a normal user flow
- Missing security headers without demonstrated impact
- Self-XSS or issues that require significant user interaction
- Clickjacking on pages with no sensitive actions

### Security Best Practices

For users of ArkT, we recommend:

- **Keep your browser updated**: Use the latest version of your browser
- **Use HTTPS**: Always access ArkT via `https://arkt.ink`
- **Review OAuth permissions**: Regularly review and revoke GitHub OAuth tokens you're not using
- **Clear sensitive data**: If using a shared computer, clear your browser data after use
- **Report suspicious activity**: If you notice anything unusual, please contact us immediately

### Security Architecture

ArkT is built with security in mind:

- **Local-First Architecture**: Your diagrams are stored locally in your browser using IndexedDB
- **Zero-Knowledge Cloud Sync**: When enabled, diagrams are encrypted end-to-end (AES-256)
- **Secure OAuth**: GitHub OAuth tokens stored in browser localStorage only
- **HTTPS Everywhere**: All traffic encrypted with TLS 1.3
- **No Server-Side Storage**: Diagram content never stored on our servers (unless you enable cloud sync)
- **Minimal Scopes**: GitHub OAuth uses minimal read-only scopes

### Recognition

Security researchers who responsibly disclose vulnerabilities will be:

- Credited in our security acknowledgments (if desired)
- Listed in our Security Hall of Fame
- Invited to private beta testing of security features

### Questions?

If you have questions about this security policy or our security practices, please contact us at [security@arkt.ink](mailto:security@arkt.ink).

You can also read more about our security practices on our [Security Page](https://arkt.ink/security) and [Privacy Policy](https://arkt.ink/privacy).

---

**Thank you for helping keep ArkT and our users safe!**

