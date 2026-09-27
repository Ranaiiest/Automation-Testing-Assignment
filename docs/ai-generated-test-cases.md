# AI-Assisted Login Test Cases

## Scope

Target application: [SauceDemo](https://www.saucedemo.com/)

| ID | Scenario | Test data | Steps | Expected result |
| --- | --- | --- | --- | --- |
| LGN-001 | Successful login | `standard_user` / `secret_sauce` | Enter valid credentials and select Login. | The inventory page opens and the Products heading is visible. |
| LGN-002 | Locked account | `locked_out_user` / `secret_sauce` | Enter locked-user credentials and select Login. | Login is blocked and the locked-out message is shown. |
| LGN-003 | Unknown username | `unknown_user` / `secret_sauce` | Enter an unregistered username with a valid password and select Login. | Login is blocked and an invalid-credentials message is shown. |
| LGN-004 | Incorrect password | `standard_user` / `incorrect_password` | Enter a valid username with an invalid password and select Login. | Login is blocked and an invalid-credentials message is shown. |
| LGN-005 | Empty credentials | Empty username and password | Select Login without entering credentials. | Login is blocked and a username-required message is shown. |

The automated suite implements all five cases. LGN-001 is the primary happy-path test required by the assignment.
